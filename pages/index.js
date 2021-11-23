/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "@components/Header";
import Layout from "@components/Layout";
import { Heading } from "@components/Typography";
import Content from "@components/Content";
import SiteLink from "@components/UI/SiteLink";

import { getAllPosts } from "../lib/posts";

export default function Home({ posts }) {
	return (
		<Layout>
			<Head>
				<title>Cory&apos;s Thoughts</title>
			</Head>
			<Header />
			<Content>
			<Heading level="h1">Cory's Thoughts</Heading>


				{posts.map((post) => (
					<div key={post.postSlug} className="mb-8">
						<Heading level="h3">
							<SiteLink href={`/blog/` + post.postSlug}>{post.postTitle}</SiteLink>
						</Heading>
						<p>{post.postContent}</p>
						<p><SiteLink href={`/blog/` + post.postSlug}>Read on...</SiteLink></p>
					</div>
				))}
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
