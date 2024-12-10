import Article from "@components/Article"
import { getAllPosts, getPostBySlug } from "@/src/lib/posts"
import { sanitizeUrlSegment } from "@utils/content-helpers"
import { MarkdownComponents } from "@utils/markdownComponents"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { COMPONENTS } from "@/components/Storyblok/components"
import { apiPlugin, storyblokInit } from "@storyblok/react"

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
	use: [apiPlugin],
	components: COMPONENTS,
})

export default async function BlogPost(props: {
	params: Promise<{ slug: string; category: string }>
}) {
	const slug = (await props.params).slug

	const post = await getPostBySlug(slug)

	// Ensure that we have the post
	if (!post) {
		notFound()
	}

	return (
		<Article
			data={{
				title: post?.title,
				wordCount: 100,
				publishDate: post?.date,
				category: "Blog",
				tags: post?.tags,
			}}
		>
			<Markdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
				{post.content}
			</Markdown>
		</Article>
	)
}

// Generate Static Params (Paths)
export async function generateStaticParams() {
	// Generate paths for all published posts
	const allPosts = await getAllPosts()

	const paths = allPosts
		.filter((post) => post.frontmatter.published) // Only use published posts
		.map((post) => {
			const sanitizedCategory = sanitizeUrlSegment(post.frontmatter.category)
			return {
				slug: post.frontmatter.slug,
				category: sanitizedCategory,
			}
		})

	return paths
}

export const dynamicParams = false

// Metadata generation (only fetch necessary data)
export async function generateMetadata(props) {
	const { slug, category } = await props.params

	// Fetch only the post needed for metadata (no need to fetch all posts)
	const allPosts = await getAllPosts()
	const post = allPosts.find((post) => post.frontmatter.slug === slug)

	if (!post) {
		return {
			title: "Post not found",
			description: "This post does not exist.",
		}
	}

	const { title, excerpt } = post.frontmatter
	const imageUrl = `https://corydhmiller.com/og?title=${title}`
	const pageUrl = `https://corydhmiller.com/blog/${slug}`

	return {
		title,
		description: excerpt,
		openGraph: {
			images: [{ url: imageUrl }],
			type: "article",
			title,
			description: excerpt,
			url: pageUrl,
			siteName: "Cory Miller",
			locale: "en_US",
		},
		twitter: {
			url: pageUrl,
			description: excerpt,
			title,
			imageAlt: title,
			card: "summary_large_image",
		},
	}
}
