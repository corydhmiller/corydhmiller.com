"use client"
import { COMPONENTS } from "@/components/Storyblok/components"
import { apiPlugin, storyblokInit } from "@storyblok/react"

export const initStoryblock = storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
	use: [apiPlugin],
	components: COMPONENTS,
})

export default function StoryblokProvider({ children }) {
	return children
}
