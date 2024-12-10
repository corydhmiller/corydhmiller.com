import { COMPONENTS } from "@/components/Storyblok/components"
import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react"
import Heading from "@/components/Typography/Heading"
import Link from "@/components/UI/Link"
import { formatDate } from "@/src/utils/dates.utils"
import Content from "@components/Content"
import Prose from "@components/Prose"
import { BackgroundText } from "@/components/BackgroundText"
import PaginationControls from "@/components/PaginationControls"

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
	use: [apiPlugin],
	components: COMPONENTS,
})

export default async function Blog({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const page =
		typeof searchParams.page === "string" ? Number(searchParams.page) : 1
	const { data, total } = await fetchData(page)

	const posts = data.stories

	return (
		<>
			<BackgroundText text="Blog" />
			<Content>
				<Prose className="col-span-3 w-full max-w-7xl mx-auto sm:text-center mb-6">
					<Heading as="h1">Blog</Heading>
				</Prose>
				<Prose className="prose-lg mx-auto">
					{posts && (
						<div className="grid gap-8">
							{posts.map((post) => (
								<div key={post.slug}>
									<Link href={`/blog/${post.slug}`}>{post.name}</Link>
									{post.created_at && (
										<span className="text-sm block opacity-60">
											{formatDate(post.created_at)}
										</span>
									)}
									{post.content?.excerpt && (
										<span className="prose-xl text-gray-800 dark:text-gray-100">
											{post.content.excerpt}
										</span>
									)}
								</div>
							))}
						</div>
					)}
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
	})
	console.log(response.data.total)

	return {
		data: response.data,
		total: response.data.total,
	}
}
