import Content from "@components/Content"
import Prose from "@components/Prose"
import { Heading } from "@components/Typography"
import { getAllPosts } from "@lib/posts"

interface HomeProps {
	posts: {}
}

export default function Home() {
	const posts = getAllPosts().sort((a, b) => {
		return (
			new Date(b.frontmatter.date).getTime() -
			new Date(a.frontmatter.date).getTime()
		)
	})
	return (
		<Content>
			<Prose>
				<Heading as="h1">Rebuilding this. See you soon.</Heading>
				<div className="grid">
					{posts.map((post) => {
						return (
							<div key={post.frontmatter.slug}>
								<a href={`/blog/${post.frontmatter.slug}`}>
									<Heading as="h2">{post.frontmatter.title}</Heading>
								</a>
								<p>{post.frontmatter.excerpt}</p>
							</div>
						)
					})}
				</div>
			</Prose>
		</Content>
	)
}

//metadata
export const metadata = {
	title: "Home",
	description: "Home page",
}
