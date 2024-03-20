import Content from "@components/Content"
import Prose from "@components/Prose"
import Heading from "@components/Typography/Heading"
import Link from "@components/UI/Link"
import { getAllPosts } from "@lib/posts"
import { sanitizeUrlSegment } from "@utils/content-helpers"
import Image from "next/image"

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
				<div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 items-center">
					<div className="sm:col-span-2 prose-h1:m-0 prose-lg">
						<Prose>
							<Heading as="h1" className="">
								Hi!
							</Heading>
							<p className="prose-xl">
								I&apos;m <strong>Cory</strong>, a front-end developer based in
								Vienna. I lead the marketing site efforts over at{" "}
								<Link href="https://convertkit.com" newTab>
									ConvertKit
								</Link>
								, write a bit about web development, and write and produce
								music.
							</p>
						</Prose>
					</div>

					<Image
						src="/images/cory-miller-profile-picture.jpg"
						alt="Cory Miller profile picture"
						width={200}
						height={200}
						className="rounded-full object-cover border-2 border-blue-600"
					/>
				</div>
			</Content>
			<div className="w-full h-1 my-8 sm:my-16 bg-gray-600 col-span-3"></div>
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
											<button className="bg-blue-600 text-white text-md px-2 py-1 rounded-lg transform text-base hover:scale-105 focus:scale-105 duration-200 transition-all">
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
