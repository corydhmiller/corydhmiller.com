import Content from "@components/Content"
import Prose from "@components/Prose"
import Link from "@components/UI/Link"
import { getAllPosts } from "@/src/lib/posts"
import { sanitizeUrlSegment } from "@utils/content-helpers"

export default function Home() {
	const posts = getAllPosts()
		.filter((post) => post.frontmatter.published)
		.sort((a, b) => {
			return (
				new Date(b.frontmatter.date).getTime() -
				new Date(a.frontmatter.date).getTime()
			)
		})

	return (
		<>
			<Content>
				<Prose>
					<div className="grid gap-8">
						{posts.map((post) => {
							const { slug, title, category, excerpt, date } = post.frontmatter
							return (
								<div className="bg-blue-800 p-4 rounded-lg" key={slug}>
									<Link href={`${sanitizeUrlSegment(category)}/${slug}`}>
										<div>{title}</div>
									</Link>
									<span className="prose-xl">{excerpt}</span>
									<div className="mt-4">
										<Link
											variant="naked"
											href={`${sanitizeUrlSegment(category)}/${slug}`}
										>
											<button className="text-white text-md px-2 py-1 rounded-lg transform text-base hover:scale-105 focus:scale-105 duration-200 transition-all">
												Read more
											</button>
										</Link>
									</div>
								</div>
							)
						})}
					</div>
				</Prose>
			</Content>
		</>
	)
}
