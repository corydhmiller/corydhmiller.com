import Article from "@components/Article"
import { getAllPosts } from "@/src/lib/posts"
import { sanitizeUrlSegment } from "@utils/content-helpers"
import { MarkdownComponents } from "@utils/markdownComponents"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default async function BlogPost(props: {
	params: Promise<{ slug: string; category: string }>
}) {
	return <></>
	const params = await props.params
	const { slug } = params

	// Get the post based on the slug (no need to fetch all posts every time)
	const allPosts = await getAllPosts()
	const post = allPosts.find((post) => post.frontmatter.slug === slug)

	// Ensure that we have the post
	if (!post) {
		notFound()
	}

	return (
		<Article
			data={{
				title: post.frontmatter.title,
				wordCount: String(post.content).split(/\s+/).length,
				publishDate: post.frontmatter.date,
				category: post.frontmatter.category,
				tags: post.frontmatter.tags,
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
