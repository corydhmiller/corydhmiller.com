import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const getPostBySlug = (slug) => {
	const postFilePath = path.join(process.cwd(), "content", `${slug}.mdx`)
	const postFileContents = fs.readFileSync(postFilePath, "utf8")
	const { data, content } = matter(postFileContents)

	return {
		frontmatter: data,
		content,
	}
}
