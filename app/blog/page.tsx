import { BlogArchivePostCard } from "@/components/BlogArchivePostCard"
import PaginationControls from "@/components/PaginationControls"
import { COMPONENTS } from "@/components/Storyblok/components"
import Heading from "@/components/Typography/Heading"
import Content from "@components/Content"
import Prose from "@components/Prose"
import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react"

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
	use: [apiPlugin],
	components: COMPONENTS,
})

export default async function Blog(props: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	const searchParams = await props.searchParams
	const page =
		typeof searchParams.page === "string" ? Number(searchParams.page) : 1
	const { data, total } = await fetchData(page)

	const posts = data.stories
	return (
		<>
			<Content>
				<Prose className="w-full mx-auto sm:text-center my-8 sm:my-24">
					<Heading as="h1">Blog</Heading>
				</Prose>
				<div className="mx-auto mb-24">
					{posts && (
						<div className="grid gap-12 grid-cols-1 sm:grid-cols-2">
							{posts.map((post, index) => {
								return (
									<div key={post.slug}>
										<BlogArchivePostCard
											slug={post.slug}
											name={post.content.title}
											created_at={post.first_published_at}
											content={post.content}
											priority={index === 0}
										/>
									</div>
								)
							})}
						</div>
					)}
				</div>
				<Prose className="prose-lg mx-auto mb-24">
					<PaginationControls
						currentPage={page}
						totalPosts={total}
						postsPerPage={10}
					/>
				</Prose>
			</Content>
		</>
	)
}

async function fetchData(page: number) {
	const storyblokApi = getStoryblokApi()
	const response = await storyblokApi.get("cdn/stories", {
		starts_with: "blog/",
		version: "published",
		per_page: 10,
		page,
		sort_by: "first_published_at:desc",
	})

	return {
		data: response.data,
		total: response.total,
	}
}

export const dynamic = "force-static"
export const revalidate = 10
