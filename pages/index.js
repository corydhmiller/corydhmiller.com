/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Heading } from "../components/Typography";
import Content from "../components/Content";
import SiteLink from "../components/UI/SiteLink";

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
			<Heading level="h2">H2 Heading</Heading>
			<Heading level="h3">H3 Heading</Heading>
			<Heading level="h4">H4 Heading</Heading>
			<Heading level="h5">H5 Heading</Heading>
			<Heading level="h6">H6 Heading</Heading>

				{posts.map((post) => (
					<div key={post.postSlug} className="mb-8">
						<Heading level="h1">
							Henlo
						</Heading>
						<Heading level="h2">
							<SiteLink href={`/blog/` + post.postSlug}>{post.postTitle}</SiteLink>
						</Heading>
						<Heading level="h4" className="text-lg font-semibold">{post.publishedBy.name}</Heading>
						<p>{post.postContent}</p>
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
