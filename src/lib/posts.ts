import { join } from "path"
import { promises as fs, readFileSync } from "fs"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

export const getAllPosts = async () => {
	const postsDirectory = join(process.cwd(), "src/pages/blog")
	const filenames = await fs.readdir(postsDirectory)
	const files = await Promise.all(
		filenames.map(async (filename) => {
			const filePath = join(postsDirectory, filename)
			const fileContent = await readFileSync(filePath)
			const { data, content } = matter(fileContent)
			const html = await serialize(content)

			return {
				filename,
				frontMatter: data,
				content,
				html,
			}
		})
	)

	const posts = files.map((file) => {
		return {
			path: `/blog/${file.filename.replace(".mdx", "")}`,
			data: file.frontMatter,
			content: file.content,
			html: file.html,
		}
	})

	return posts
}

export const renderMarkdown = async (markdown: string) => {
	return serialize(markdown || "")
}
