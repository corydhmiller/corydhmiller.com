"use client"
import PhotographyGallery from "@components/PhotographyGallery"
import {
	getStoryblokApi
} from "@storyblok/react"
import { useEffect, useState } from "react"

export default function Photography() {
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		async function fetchData() {
			const storyblokApi = getStoryblokApi()
			const { data } = await storyblokApi.get(`cdn/stories`, {
				starts_with: "photography/",
				version: "published",
			})
			setPhotos(data.stories)
		}

		fetchData()
	}, [])

	return (
		<div>
			<div className="fixed inset-0 z-0 opacity-[.02] pointer-events-none">
				<div
					className="text-black text-5xl font-serif font-bold"
					style={{
						fontSize: `calc(round(calc(100vw/2.5),2px))`,
						maxWidth: "100vw",
					}}
				>
					Photo<span className="block">graphy</span>
				</div>
			</div>
			<PhotographyGallery photos={photos} />
		</div>
	)
}
