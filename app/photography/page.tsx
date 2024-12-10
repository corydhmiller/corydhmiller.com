"use client"
import PhotographyGallery from "@components/PhotographyGallery"
import {
	getStoryblokApi
} from "@storyblok/react"
import { useEffect, useState } from "react"
import { BackgroundText } from "@/components/BackgroundText"

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
			<BackgroundText text={["Photo", "graphy"]} />
			<PhotographyGallery photos={photos} />
		</div>
	)
}
