import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
	query GET_ALL_POSTS {
		posts(first: 1000) {
			id
			postContent
			postSlug
			postTitle
			publishedBy {
				id
				name
				picture
			}
		}
	}
`;

export const GET_POST_BY_ID = gql`
	query GetPostByID {
		post(where: { id: "..." }) {
			id
			postSlug
			postTitle
			postContent
			publishedBy {
				name
				picture
			}
		}
	}
`;
