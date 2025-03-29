"use client"

import { ScrollArea } from "@components/UI/scroll-area"
import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { useEffect, useState } from "react"
import { getStoryblokApi } from "@storyblok/react"
import { PhotoCard } from "./PhotoCard"
import { PhotoModal } from "./PhotoModal"
import { FilterPanel } from "./FilterPanel"

export default function PortfolioComponent() {
	const [photos, setPhotos] = useState([])
	const [selectedImage, setSelectedImage] = React.useState(null)
	const [isFilterOpen, setIsFilterOpen] = React.useState(false)
	const [selectedTags, setSelectedTags] = React.useState([])
	const [selectedMedium, setSelectedMedium] = React.useState([])
	const [selectedCamera, setSelectedCamera] = React.useState([])
	const [focusedIndex, setFocusedIndex] = React.useState(-1)

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

	const resetAllFilters = React.useCallback(() => {
		setSelectedTags([])
		setSelectedMedium([])
		setSelectedCamera([])
	}, [])

	const filteredPhotos = React.useMemo(() => {
		return photos
			.filter((photo) => {
				const tagsMatch =
					selectedTags.length === 0 ||
					selectedTags.every((tag) => photo.tag_list.includes(tag))
				const mediumMatch =
					selectedMedium.length === 0 || 
					selectedMedium.includes(photo.content.medium)
				const cameraMatch = 
					selectedCamera.length === 0 ||
					selectedCamera.includes(photo.content.camera)
				return tagsMatch && mediumMatch && cameraMatch
			})
			.sort((a, b) => {
				return (
					new Date(b.content.date).getTime() -
					new Date(a.content.date).getTime()
				)
			})
	}, [selectedTags, selectedMedium, selectedCamera, photos])

	const allTags = Array.from(new Set(photos.flatMap((photo) => photo.tag_list)))
	const allCameras = Array.from(new Set(photos.map((photo) => photo.content.camera))).filter(Boolean)

	const handleKeyDown = React.useCallback(
		(e: KeyboardEvent) => {
			if (selectedImage) {
				if (e.key === "Escape") {
					setSelectedImage(null)
				} else if (e.key === "ArrowLeft") {
					const currentIndex = filteredPhotos.findIndex(
						(photo) => photo.id === selectedImage.id
					)
					if (currentIndex > 0) {
						setSelectedImage(filteredPhotos[currentIndex - 1])
					}
				} else if (e.key === "ArrowRight") {
					const currentIndex = filteredPhotos.findIndex(
						(photo) => photo.id === selectedImage.id
					)
					if (currentIndex < filteredPhotos.length - 1) {
						setSelectedImage(filteredPhotos[currentIndex + 1])
					}
				}
			} else {
				if (e.key === "ArrowUp") {
					setFocusedIndex((prev) => Math.max(prev - 3, 0))
				} else if (e.key === "ArrowDown") {
					setFocusedIndex((prev) =>
						Math.min(prev + 3, filteredPhotos.length - 1)
					)
				} else if (e.key === "ArrowLeft") {
					setFocusedIndex((prev) => Math.max(prev - 1, 0))
				} else if (e.key === "ArrowRight") {
					setFocusedIndex((prev) =>
						Math.min(prev + 1, filteredPhotos.length - 1)
					)
				} else if (e.key === "Enter" && focusedIndex !== -1) {
					setSelectedImage(filteredPhotos[focusedIndex])
				}
			}
		},
		[selectedImage, filteredPhotos, focusedIndex]
	)

	React.useEffect(() => {
		window.addEventListener("keydown", handleKeyDown)
		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [handleKeyDown])

	React.useEffect(() => {
		if (focusedIndex !== -1) {
			const focusedElement = document.getElementById(
				`photo-${filteredPhotos[focusedIndex].id}`
			)
			if (focusedElement) {
				focusedElement.focus()
			}
		}
	}, [focusedIndex, filteredPhotos])

	return (
		<div className="min-h-screen w-full flex flex-col">
			<FilterPanel
				isFilterOpen={isFilterOpen}
				setIsFilterOpen={setIsFilterOpen}
				selectedTags={selectedTags}
				setSelectedTags={setSelectedTags}
				selectedMedium={selectedMedium}
				setSelectedMedium={setSelectedMedium}
				selectedCamera={selectedCamera}
				setSelectedCamera={setSelectedCamera}
				allTags={allTags}
				allCameras={allCameras}
				isMobile={true}
				resetAllFilters={resetAllFilters}
			/>

			<div className="flex flex-1 overflow-hidden">
				<ScrollArea className="w-full">
					<div className="p-6">
						<AnimatePresence>
							<motion.div
								layout
								className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
							>
								{filteredPhotos.map((photo, index) => (
									<PhotoCard
										key={photo.id}
										photo={photo}
										index={index}
										focusedIndex={focusedIndex}
										onSelect={setSelectedImage}
										onFocus={setFocusedIndex}
									/>
								))}
							</motion.div>
						</AnimatePresence>
					</div>
				</ScrollArea>

				<FilterPanel
					isFilterOpen={isFilterOpen}
					setIsFilterOpen={setIsFilterOpen}
					selectedTags={selectedTags}
					setSelectedTags={setSelectedTags}
					selectedMedium={selectedMedium}
					setSelectedMedium={setSelectedMedium}
					selectedCamera={selectedCamera}
					setSelectedCamera={setSelectedCamera}
					allTags={allTags}
					allCameras={allCameras}
					isMobile={false}
					resetAllFilters={resetAllFilters}
				/>
			</div>

			<AnimatePresence>
				{selectedImage && (
					<PhotoModal
						selectedImage={selectedImage}
						onClose={() => setSelectedImage(null)}
					/>
				)}
			</AnimatePresence>
		</div>
	)
}
