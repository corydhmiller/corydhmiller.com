import { getAllPosts } from "../../lib/posts";
import Layout from "../../components/Layout";
import Content from "../../components/Content";

export const Post = ({ props }) => {
	return (
		<Layout>
			<Content>Boop</Content>
		</Layout>
	);
};

export default Post;

export const getStaticProps = async () => {
	return { props: { title: "My Title", content: "..." } };
};

export const getStaticPaths = async () => {
	const { posts } = await getAllPosts();

	const paths = posts.map((post) => {
		const { postSlug } = post;
		return {
			params: {
				slug: postSlug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};
