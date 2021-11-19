import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
	query GET_ALL_POSTS {
		posts(first: 1000) {
			id
			postContent
			postSlug
			postTitle
			createdAt
			createdBy {
				id
			}
		}
	}
`;
