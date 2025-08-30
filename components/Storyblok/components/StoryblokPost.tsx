import { storyblokEditable } from "@storyblok/react"
import Article from "@components/Article"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeUnwrapImages from "rehype-unwrap-images"
import { MarkdownComponents } from "@utils/markdownComponents"

const StoryblokPost = ({ blok }) => {
	return (
		<div {...storyblokEditable(blok)}>
			<Article
				data={{
					title: blok.title,
					wordCount: 100, // Could calculate this from content
					publishDate: new Date().toISOString(), // Could use story publish date
					category: "Blog",
					tags: blok.tags || [],
					image: blok.image,
				}}
			>
				<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeUnwrapImages]}
					components={MarkdownComponents}
				>
					{blok.content || ""}
				</Markdown>
			</Article>
		</div>
	)
}

export default StoryblokPost
