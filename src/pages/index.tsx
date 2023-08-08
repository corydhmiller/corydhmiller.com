/* eslint-disable react/no-unescaped-entities */
import { Text,Heading } from "@chakra-ui/react"
import Content from "@components/Content"
import Layout from "@components/Layout"
import Head from "next/head"

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
				<Text>See you soon.</Text>
			</Content>
		</Layout>
	)
}
