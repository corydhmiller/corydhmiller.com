import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

import { getAllPosts } from "../lib/posts";

export default function Home({ posts }) {
	console.log(posts.map((post) => post.postTitle));
	return (
		<Layout>
			<Head>
				<title>Cory&apos;s Thoughts</title>
			</Head>
			{posts.map((post) => 
				<div>{post.postTitle}</div>
			)}
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
