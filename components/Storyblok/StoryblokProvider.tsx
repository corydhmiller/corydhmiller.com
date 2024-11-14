"use client"
import { storyblokInit, apiPlugin } from "@storyblok/react"

storyblokInit({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
	use: [apiPlugin],
})

export default function StoryblokProvider({ children }) {
	return children
}
