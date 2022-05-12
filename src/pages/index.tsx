/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Layout from "@components/Layout"
import { Heading } from "@components/Typography"
import { Paragraph } from "@components/Blocks"
import Content from "@components/Content"
import { getAllPosts } from "@lib/posts"
import {MDXRemote} from "next-mdx-remote"
import components from "@components/MDXComponents"

interface HomeProps {}

export default function Home({ posts }) {
	return (
		<Layout>
			<Head>
				<title>Cory&apos;s Thoughts</title>
			</Head>
			<Content>
				<Heading as="h1">Thoughts</Heading>
			</Content>
			<Content>
				{posts.map( (post) => {
					const { data, path, html } = post

					return (
						<div key={path}>
							<Heading>{data.title}</Heading>
							<Paragraph>{data.date}</Paragraph>
							<MDXRemote {...html} components={components} />
						</div>
					)
				})}
			</Content>
		</Layout>
	)
}

export async function getStaticProps() {
	const posts = await getAllPosts()

	return {
		props: {
			posts,
		},
	}
}
