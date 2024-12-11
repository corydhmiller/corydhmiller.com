import Article from "@components/Article"
import { getAllPosts, getPostBySlug } from "@/src/lib/posts"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { MarkdownComponents } from "@utils/markdownComponents"
import { COMPONENTS } from "@/components/Storyblok/components"
import { apiPlugin, storyblokInit } from "@storyblok/react"

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
	use: [apiPlugin],
	components: COMPONENTS,
})

export default async function BlogPost(props: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await props.params).slug
	const post = await getPostBySlug(slug)

	if (!post) {
		notFound()
	}

	return (
		<Article
			data={{
				title: post.title,
				wordCount: 100,
				publishDate: post.date,
				category: "Blog",
				tags: post.tags,
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
	const allPosts = await getAllPosts()
	
	const paths = allPosts.map((post) => ({
		slug: post.slug,
	}))

	return paths
}

export const dynamicParams = false

// Metadata generation
export async function generateMetadata(props) {
	const { slug } = await props.params
	const post = await getPostBySlug(slug)

	if (!post) {
		return {
			title: "Post not found",
			description: "This post does not exist.",
		}
	}

	const imageUrl = `https://corydhmiller.com/og?title=${post.title}`
	const pageUrl = `https://corydhmiller.com/blog/${slug}`

	return {
		title: post.title,
		description: post.excerpt,
		openGraph: {
			images: [{ url: imageUrl }],
			type: "article",
			title: post.title,
			description: post.excerpt,
			url: pageUrl,
			siteName: "Cory Miller",
			locale: "en_US",
		},
		twitter: {
			url: pageUrl,
			description: post.excerpt,
			title: post.title,
			imageAlt: post.title,
			card: "summary_large_image",
		},
	}
}
