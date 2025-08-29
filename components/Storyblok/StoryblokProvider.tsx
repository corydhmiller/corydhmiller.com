"use client"
import { COMPONENTS } from "@/components/Storyblok/components"
import { apiPlugin, storyblokInit } from "@storyblok/react"
import { useEffect, useState } from "react"
import { getAccessToken } from "@/src/lib/storyblok"

// Initialize Storyblok with public token for server-side
export const initStoryblock = storyblokInit({
	accessToken: getAccessToken(false), // Use public token by default
	use: [apiPlugin],
	components: COMPONENTS,
})

export default function StoryblokProvider({ children }) {
	const [isVisualEditor, setIsVisualEditor] = useState(false)

	useEffect(() => {
		// Detect if we're in Visual Editor
		const checkVisualEditor = () => {
			return (
				typeof window !== 'undefined' &&
				window.self !== window.top &&
				window.location.search.includes('_storyblok')
			)
		}

		setIsVisualEditor(checkVisualEditor())

		// Initialize Storyblok Bridge only in Visual Editor
		if (checkVisualEditor()) {
			const script = document.createElement('script')
			script.src = 'https://app.storyblok.com/f/storyblok-v2-latest.js'
			script.onload = () => {
				const { storyblokBridge } = window as any
				if (storyblokBridge) {
					storyblokBridge.init({
						accessToken: getAccessToken(true), // Use preview token in Visual Editor
					})
				}
			}
			document.head.appendChild(script)
		}
	}, [])

	return children
}
