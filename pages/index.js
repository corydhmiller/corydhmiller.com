/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "@components/Header";
import Layout from "@components/Layout";
import { Heading } from "@components/Typography";
import { Paragraph } from "@components/Blocks/Blocks";
import Content from "@components/Content";
import SiteLink from "@components/UI/SiteLink";

import { getAllPosts } from "../lib/posts";

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

export const getStaticProps = async () => {
	const { posts } = await getAllPosts();

	return {
		props: {
			posts,
		},
	};
};
