'use server'
import fs from "fs"
import matter from "gray-matter"
import path from "path"

const _contentDirectory = "src/content"

export const getPostBySlug = async (slug: string) => {
	const postFilePath = path.join(_contentDirectory, `${slug}.mdx`)
	const postFileContents = fs.readFileSync(postFilePath, "utf8")
	const { data, content } = matter(postFileContents)

	return {
		frontmatter: data,
		content,
		slug: data.slug, // Here we extract the slug from the frontmatter
	}
}

export const getAllPosts = async (
	directory = path.join(process.cwd(), _contentDirectory)
) => {
	// Initialize an array to store post data
	const allPosts = []

	// Read the contents of the directory. 'withFileTypes' ensures that the resulting array contains fs.Dirent objects
	// This allows us to identify if an item is a directory or a regular file without another fs call.
	const entries = fs.readdirSync(directory, { withFileTypes: true })

	// Iterate through each item (file or directory) in the directory
	for (const entry of entries) {
		// Construct the full path to the item
		const fullPath = path.join(directory, entry.name)

		// Check if the current item is a directory
		if (entry.isDirectory()) {
			// If it is, then dive deeper into this directory and spread the resulting posts into the allPosts array
			allPosts.push(...(await getAllPosts(fullPath)))
		}
		// Check if the current item is an .mdx file
		else if (path.extname(entry.name) === ".mdx") {
			// If it is, read its contents
			const fileContents = fs.readFileSync(fullPath, "utf8")
			// Use the 'matter' library to parse the file's frontmatter and content
			const { data, content } = matter(fileContents)

			// Push the post data into the allPosts array
			allPosts.push({
				frontmatter: data, // metadata of the post
				content: content, // actual content of the post
				slug: data.slug, // the slug derived from the frontmatter
			})
		}
	}

	// Return the populated array of posts
	return allPosts
}
