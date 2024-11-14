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
	const params = await props.params
	// The params are passed in by the generateStaticParams function below.
	const { slug, category } = params

	// First we want to get all the posts so we can check if the content exists
	const allPosts = await getAllPosts()

	const post = allPosts.find((post) => post.frontmatter.slug === slug)
	const categories = allPosts.map((post) =>
		sanitizeUrlSegment(post.frontmatter.category)
	)

	// Each post requires at least a slug and a category
	// so if either of those are missing we want to return a 404
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

export async function generateStaticParams() {
	// We want to generate the
	const paths = (await getAllPosts()).map((post) => {
		if (post.frontmatter.published === false) return
		const sanitizedCategory = sanitizeUrlSegment(post.frontmatter.category)

		return {
			slug: post.frontmatter.slug,
			category: sanitizedCategory,
		}
	})

	return paths
}

export const dynamicParams = false

// Metadata depending on the frontmatter content
export async function generateMetadata(props) {
	const params = await props.params
	const { slug } = params

	const allPosts = await getAllPosts()

	const post = allPosts.find((post) => post.frontmatter.slug === slug)

	const { title, excerpt, category } = post.frontmatter
	const imageUrl = `https://corydhmiller.com/og?title=${title}`,
		pageUrl = `https://corydhmiller.com/${category.toLowerCase()}/${slug}`

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
