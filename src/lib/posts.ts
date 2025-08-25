import { getStoryblokApi } from "@storyblok/react"

export const getAllPosts = async () => {
	try {
		const storyblokApi = getStoryblokApi()
		// Fetch all blog posts from Storyblok
		const { data } = await storyblokApi.get("cdn/stories", {
			starts_with: "blog/", // Assuming your blog posts are in a 'blog' folder
			version: process.env.NODE_ENV === "production" ? "published" : "draft",
		})
		// Transform the Storyblok response into the expected format
		const allPosts = data.stories.map((story) => ({
			frontmatter: {
				title: story.content.title,
				date: story.first_published_at,
				description: story.content.description,
				slug: story.slug,
				// Add any other frontmatter fields you need
			},
			content: story.content.content, // Assuming your main content is in a 'content' field
			slug: story.slug,
		}))

		return allPosts
	} catch (error) {
		console.error("Error fetching posts from Storyblok:", error)
		return []
	}
}

export const getPostBySlug = async (slug: string): Promise<any> => {
	try {
		const storyblokApi = getStoryblokApi()
		// Fetch all blog posts from Storyblok
		const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
			version: process.env.NODE_ENV === "production" ? "published" : "draft",
		})
		// Transform the Storyblok response into the expected format
		const post = {
			title: data.story.content.title,
			date: data.story.first_published_at,
			excerpt: data.story.content.excerpt,
			slug: data.story.slug,
			content: data.story.content?.content, // Assuming your main content is in a 'content' field
			tags: data.story?.tag_list,
			image: data.story?.content?.image,
		}

		return post
	} catch (error) {
		console.error("Error fetching posts from Storyblok:", error)
		return []
	}
}
