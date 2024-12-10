import { COMPONENTS } from "@/components/Storyblok/components"
import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react/rsc"
import Heading from "@/components/Typography/Heading"
import Link from "@/components/UI/Link"
import { formatDate } from "@/src/utils/dates.utils"
import Content from "@components/Content"
import Prose from "@components/Prose"
import { BackgroundText } from "@/components/BackgroundText"

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
	use: [apiPlugin],
	components: COMPONENTS,
})

export default async function Blog() {
	const { data } = await fetchData()
	const posts = data.stories
	return (
		<>
			<BackgroundText text="Blog" />
			<Content>
				<Prose className="col-span-3 w-full max-w-7xl mx-auto sm:text-center mb-6">
					<Heading as="h1">Blog</Heading>
				</Prose>
				<Prose className="prose-lg mx-auto">
					<div className="grid gap-8">
						{posts.map((post, index) => {
							const { slug, name, content, created_at } = post

							const postUrl = `/blog/${slug}`
							return (
								<div key={slug}>
									<Link href={postUrl}>{name}</Link>
									{created_at && (
										<span className="text-sm block opacity-60">
											{formatDate(created_at)}
										</span>
									)}
									{content?.excerpt && (
										<span className="prose-xl text-gray-800 dark:text-gray-100">
											{content.excerpt}
										</span>
									)}
								</div>
							)
						})}
					</div>
				</Prose>
			</Content>
		</>
	)
}

export async function fetchData() {
	const storyblokApi = getStoryblokApi()
	return storyblokApi.get("cdn/stories", {
		starts_with: "blog/",
		version: "published",
	})
}
