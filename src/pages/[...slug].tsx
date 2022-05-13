import { Paragraph, Small } from "@components/Blocks"
import Content from "@components/Content"
import Layout from "@components/Layout"
import components from "@components/MDXComponents"
import { Heading } from "@components/Typography"
import { getAllPostPaths, getPostDataFromSlug } from "@lib/posts"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"

const PostPage = ({ post }) => {
	const { data, html } = post
	const { title, description, categories, date } = data
	return (
		<Layout>
			<Head>
				<title>{data.title} - Cory&apos;s Thoughts</title>
			</Head>
			<Content>
				<Heading as="h1">{title}</Heading>
				<Paragraph>{date}</Paragraph>
				<Small>Categories: {categories.join(", ")}</Small>
			</Content>
			<Content>
				<MDXRemote {...html} components={components} />
			</Content>
		</Layout>
	)
}

export default PostPage

export async function getStaticProps({ params }) {
	const slug = params.slug[0]
	const post = await getPostDataFromSlug(slug)

	return {
		props: {
			post,
		},
	}
}

export async function getStaticPaths() {
	const paths = await getAllPostPaths()

	return {
		paths,
		fallback: false,
	}
}
