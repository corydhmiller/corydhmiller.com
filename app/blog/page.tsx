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
	const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
	const { data, total } = await fetchData(page)
	const posts = data.stories

	const currentPost = posts[0] // Since we're showing one post per page

	return (
		<>
			<BackgroundText text="Blog" />
			<Content>
				<Prose className="col-span-3 w-full max-w-7xl mx-auto sm:text-center mb-6">
					<Heading as="h1">Blog</Heading>
				</Prose>
				<Prose className="prose-lg mx-auto">
					{currentPost && (
						<div className="grid gap-8">
							<div>
								<Link href={`/blog/${currentPost.slug}`}>{currentPost.name}</Link>
								{currentPost.created_at && (
									<span className="text-sm block opacity-60">
										{formatDate(currentPost.created_at)}
									</span>
								)}
								{currentPost.content?.excerpt && (
									<span className="prose-xl text-gray-800 dark:text-gray-100">
										{currentPost.content.excerpt}
									</span>
								)}
							</div>
						</div>
					)}
					<PaginationControls 
						currentPage={page} 
						totalPosts={total} 
						postsPerPage={1}
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
		per_page: 1,
		page,
	})

	return {
		data: response.data,
		total: parseInt(response.headers.get("total") || "0", 10),
	}
}

