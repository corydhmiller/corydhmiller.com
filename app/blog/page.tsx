import { COMPONENTS } from "@/components/Storyblok/components"
import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react/rsc"

import Link from "@/components/UI/Link"
import Content from "@components/Content"
import Prose from "@components/Prose"
import { cn } from "@/src/utils/cn.utils"
import Button from "@/components/UI/Button/Button"
import { formatDate } from "@/src/utils/dates.utils"
import Heading from "@/components/Typography/Heading"

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
			<Content>
				<Prose className="col-span-3 w-full max-w-7xl mx-auto sm:text-center mb-6">
					<Heading as="h1">Blog</Heading>
				</Prose>
				<Prose className="prose-lg mx-auto">
					<div className="grid gap-8">
						{posts.map((post, index) => {
							const { slug, name, content, created_at } = post
							console.log(post)
							const postUrl = `/blog/${slug}`
							return (
								<div key={slug}>
									<Link href={postUrl}>{name}</Link>
									{created_at && (
										<span className="text-sm block">
											{formatDate(created_at)}
										</span>
									)}
									{content?.excerpt && (
										<span className="prose-xl">{content.excerpt}</span>
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
