import Content from "@components/Content"
import { Heading } from "@components/Typography"
import { getPostBySlug } from "@lib/posts"
import fs from "fs"
import Markdown from "react-markdown"
import { remark } from "remark"
import html from "remark-html"
const components = {
	h1: ({ node, ...props }) => (
		<Heading as="h1" {...props}>
			{props.children}
		</Heading>
	),
	h2: ({ node, ...props }) => (
		<Heading as="h2" {...props}>
			{props.children}
		</Heading>
	),
}

export default async function BlogPost({ params }) {
	const { slug } = params
	const post = await getPostBySlug(slug)

	const processedContent = await remark().use(html).process(post.content)
	console.log(String(processedContent))

	return (
		<Content>
			<Markdown components={components}>{post.content}</Markdown>
		</Content>
	)
}

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   const markdownWithMetadata = fs.readFileSync(`content/${slug}.mdx`).toString();

//   const { data, content } = matter(markdownWithMetadata);

//   const contentHtml = processedContent.toString();

//   return {
//     props: {
//       frontmatter: data,
//       content: contentHtml,
//     },
//   };
// }

export async function generateStaticParams() {
	const files = fs.readdirSync("content")
	const paths = files.map(async (filename) => {
		const slug = filename.replace(".mdx", "")
		return {
			slug,
		}
	})

	return paths
}
