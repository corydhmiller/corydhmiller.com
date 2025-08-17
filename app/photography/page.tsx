import { BackgroundText } from "@/components/BackgroundText"
import PhotographyGallery from "@components/PhotographyGallery"
import { Metadata } from "next"
import { apiPlugin, getStoryblokApi, storyblokInit } from "@storyblok/react"

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
	use: [apiPlugin],
})

export default async function Photography() {
	const storyblokApi = getStoryblokApi()
	const { data } = await storyblokApi.get("cdn/stories", {
		starts_with: "photography/",
		version: "published",
		per_page: 100,
	})

	return (
		<div>
			<BackgroundText text={["Photo", "graphy"]} />
			<PhotographyGallery photos={data.stories} />
		</div>
	)
}

export const dynamic = "force-static"
export const revalidate = 60

export const metadata: Metadata = {
	metadataBase: new URL("https://corydhmiller.com"),
	title: {
		default: "Photography",
		template: "%s - Cory Miller",
	},
	description:
		"A gallery of my film and digital photography, including street photography, landscapes, and portraits.",
	openGraph: {
		title: "Photography",
		description: "Photography by Cory",
		url: "https://corydhmiller.com/photography",
		siteName: "Cory Miller",
		locale: "en_US",
		images: [{ url: "https://corydhmiller.com/og?title=My+photography" }],
	},
}
