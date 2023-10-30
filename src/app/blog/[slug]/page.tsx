import Article from "@components/Article"
import { getAllPosts } from "@lib/posts"
import { notFound } from "next/navigation"
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import remarkGfm from "remark-gfm"

export default async function BlogPost({ params }) {
	const { slug } = params
	const post = getAllPosts().find((post) => post.frontmatter.slug === slug)

	if (!post) {
		notFound()
	}

	return (
		<Article
			data={{
				wordCount: String(post.content).split(/\s+/).length,
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
	const paths = getAllPosts().map((post) => ({ slug: post.frontmatter.slug }))

	return paths
}
