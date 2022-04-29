/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Header from "@components/Header"
import Layout from "@components/Layout"
import { Heading } from "@components/Typography"
import { Paragraph } from "@components/Blocks/Blocks"
import Content from "@components/Content"

interface HomeProps {
	posts: {}
}

export default function Home({ posts }: HomeProps) {
	return (
		<Layout>
			<Head>
				<title>Cory&apos;s Thoughts</title>
			</Head>
			<Content>
				<Heading as="h1">Rebuilding this. See you soon.</Heading>
			</Content>
		</Layout>
	)
}
