/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Layout from "@components/Layout";
import { Heading } from "@components/Typography";
import Content from "@components/Content";


export default function Home({ posts }) {
	return (
		<Layout>
			<Head>
				<title>Cory&apos;s Thoughts</title>
			</Head>
			<Content>
				<Heading level="h1">
					Rebuilding this. See you soon.
				</Heading>
			</Content>
		</Layout>
	);
}
