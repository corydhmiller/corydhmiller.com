import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

import { GET_ALL_POSTS, GET_POST_BY_ID } from "../data/posts";

const client = new ApolloClient({
	uri: "https://api-us-east-1.graphcms.com/v2/ckw67dyr60upm01z44a4se4nn/master",
	cache: new InMemoryCache(),
});

export const getAllPosts = async () => {
	const data = await client.query({
		query: GET_ALL_POSTS,
	});
	const posts = data?.data.posts;

	return { posts };
};

export const getPostById = async (id) => {
	const data = await client.query({
		query: GET_POST_BY_ID,
    variables: {
      id,
    },
	});
	const post = data?.data.post;

	return { post };
};
