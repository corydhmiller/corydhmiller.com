import Article from "@components/Article"
import { getAllPosts } from "@lib/posts"
import { sanitizeUrlSegment } from "@utils/content-helpers"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkGfm from "remark-gfm"

export default async function BlogPost({
	params,
}: {
	params: { slug: string; category: string }
}) {
	// The params are passed in by the generateStaticParams function below.
	const { slug, category } = params

	// First we want to get all the posts so we can check if the content exists
	const allPosts = getAllPosts()

	const post = allPosts.find((post) => post.frontmatter.slug === slug)
	const categories = allPosts.map((post) =>
		sanitizeUrlSegment(post.frontmatter.category)
	)

	// Each post requires at least a slug and a category
	// so if either of those are missing we want to return a 404
	if (!post || !categories.includes(category)) {
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
			<Markdown
				remarkPlugins={[remarkGfm]}
				components={{
					code(props) {
						const { children, className, node, ...rest } = props
						const match = /language-(\w+)/.exec(className || "")
						return match ? (
							<SyntaxHighlighter
								{...rest}
								// eslint-disable-next-line react/no-children-prop
								children={String(children).replace(/\n$/, "")}
								style={oneDark}
								language={match[1]}
								PreTag="div"
							/>
						) : (
							<code {...rest} className={className}>
								{children}
							</code>
						)
					},
				}}
			>
				{post.content}
			</Markdown>
		</Article>
	)
}

export async function generateStaticParams() {
	// We want to generate the
	const paths = getAllPosts().map((post) => {
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
export async function generateMetadata({ params }) {
	const { slug } = params

	const allPosts = getAllPosts()

	const post = allPosts.find((post) => post.frontmatter.slug === slug)

	return {
		title: post.frontmatter.title,
		description: post.frontmatter.excerpt,
	}
}
