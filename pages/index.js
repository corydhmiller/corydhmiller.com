import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Content from "../components/Content";
import SiteLink from "../components/UI/SiteLink";

import { getAllPosts } from "../lib/posts";

export default function Home({ posts }) {
	return (
		<Layout>
			<Head>
				<title>Cory&apos;s Thoughts</title>
			</Head>
			<Content>
				<h1 className="text-6xl font-semibold mb-6">Cory Miller&apos;s Thoughts</h1>
				{posts.map((post) => (
					<div key={post.postSlug} className="mb-8">
						<h2 className="text-3xl font-semibold">
							<SiteLink href={`/blog/` + post.postSlug}>{post.postTitle}</SiteLink>
						</h2>
						<h4 className="text-lg font-semibold">{post.publishedBy.name}</h4>
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
