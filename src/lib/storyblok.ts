import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import { COMPONENTS } from "@/components/Storyblok/components"

export const storyblokComponents = COMPONENTS

export const getStoryblokApi = (preview = false) => {
	const accessToken = preview
		? process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
		: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN

	if (!accessToken) {
		console.error("No access token available for preview:", preview)
		return null
	}

	try {
		const result = storyblokInit({
			accessToken,
			use: [apiPlugin],
			components: storyblokComponents,
			enableFallbackComponent: true,
		})

		// Try calling it as a function
		const api = result()

		return api
	} catch (error) {
		console.error("Error initializing Storyblok:", error)
		return null
	}
}
