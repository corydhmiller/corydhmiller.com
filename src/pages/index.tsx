import { Heading, Text } from "@chakra-ui/react"
import Content from "@components/Content"
import Layout from "@components/Layout"
import { Metadata } from "next"
import Head from "next/head"

interface HomeProps {
	posts: {}
}

export const metadata: Metadata = {
	title: "Cory's Thoughts",
	description:
		"A blog about front-end development, and other things I'm interested in.",
}

export default function Home({ posts }: HomeProps) {
	return (
		<Layout>
			<Content>
				<Heading as="h1">Rebuilding this. See you soon.</Heading>
				<Text>See you soon.</Text>
			</Content>
		</Layout>
	)
}
