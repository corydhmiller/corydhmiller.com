"use client"

import { ScrollArea } from "@components/UI/scroll-area"
import { cn } from "@utils/cn.utils"
import FeatherIcon from "feather-icons-react"
import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import BlurImage from "../BlurImage"

export default function PortfolioComponent({ photos }) {
	const [selectedImage, setSelectedImage] = React.useState(null)
	const [isFilterOpen, setIsFilterOpen] = React.useState(false)
	const [selectedTags, setSelectedTags] = React.useState([])
	const [selectedMedium, setSelectedMedium] = React.useState(null)
	const [focusedIndex, setFocusedIndex] = React.useState(-1)

	const filteredPhotos = React.useMemo(() => {
		return photos
			.filter((photo) => {
				const tagsMatch =
					selectedTags.length === 0 ||
					selectedTags.every((tag) => photo.tag_list.includes(tag))
				const mediumMatch =
					!selectedMedium || photo.content.medium === selectedMedium
				return tagsMatch && mediumMatch
			})
			.sort((a, b) => {
				return (
					new Date(b.content.date).getTime() -
					new Date(a.content.date).getTime()
				)
			})
	}, [selectedTags, selectedMedium, photos])

	const allTags = Array.from(new Set(photos.flatMap((photo) => photo.tag_list)))

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
			<div className="sticky top-0 z-10 md:hidden bg-white w-full dark:bg-gray-800">
				<div className="relative w-full p-6">
					<button
						onClick={() => setIsFilterOpen(!isFilterOpen)}
						className="flex items-center gap-2 text-sm text-gray-600"
					>
						filter
						<FeatherIcon
							icon="chevron-down"
							size={16}
							className={cn(
								"h-4 w-4 transition-transform",
								isFilterOpen && "-rotate-180"
							)}
						/>
					</button>

					<AnimatePresence>
						{isFilterOpen && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className="absolute left-0 top-12 z-20 space-y-6 overflow-hidden bg-white dark:bg-gray-800"
							>
								<div className="p-6">
									<FilterContent
										selectedTags={selectedTags}
										setSelectedTags={setSelectedTags}
										selectedMedium={selectedMedium}
										setSelectedMedium={setSelectedMedium}
										allTags={allTags as string[]}
									/>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>

			<div className="flex flex-1 overflow-hidden">
				<ScrollArea className="w-full">
					<div className="p-6">
						<AnimatePresence>
							<motion.div
								layout
								className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
							>
								{filteredPhotos.map((photo, index) => (
									<motion.div
										key={photo.id}
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.5, ease: "easeInOut" }}
									>
										<motion.div
											id={`photo-${photo.id}`}
											tabIndex={0}
											whileHover={{ scale: 1.02 }}
											transition={{ duration: 0.4, ease: "easeInOut" }}
											onClick={() => setSelectedImage(photo)}
											onFocus={() => setFocusedIndex(index)}
											className={cn(
												"relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-sm",
												focusedIndex === index && "ring-2 ring-blue-500"
											)}
										>
											<BlurImage
												src={photo.content.image.filename + "/m/500x0"}
												alt={photo.content.image.alt}
												className="h-full w-full object-cover transition-opacity duration-500"
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
										</motion.div>
									</motion.div>
								))}
							</motion.div>
						</AnimatePresence>
					</div>
				</ScrollArea>

				<div className="hidden w-96 p-6 md:block flex-shrink-0">
					<div className="sticky top-6">
						<div className="relative">
							<button
								onClick={() => setIsFilterOpen(!isFilterOpen)}
								className="flex items-center gap-2 text-sm text-gray-600"
							>
								filter
								<FeatherIcon
									icon="chevron-down"
									size={16}
									className={cn(
										"h-4 w-4 transition-transform",
										isFilterOpen && "-rotate-180"
									)}
								/>
							</button>

							<AnimatePresence>
								{isFilterOpen && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className="absolute left-0 top-8 space-y-6 pt-4"
									>
										<FilterContent
											selectedTags={selectedTags}
											setSelectedTags={setSelectedTags}
											selectedMedium={selectedMedium}
											setSelectedMedium={setSelectedMedium}
											allTags={allTags as string[]}
										/>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-50 flex md:items-center md:justify-center backdrop-blur-md bg-gray-800 bg-opacity-90"
					>
						<div className="flex h-full w-full flex-col md:flex-row">
							<motion.div
								initial={{ scale: 0.9 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0.9 }}
								transition={{ duration: 0.3 }}
								className="relative h-[60vh] w-full md:h-screen md:flex-1"
								onClick={(e) => e.stopPropagation()}
							>
								<BlurImage
									src={selectedImage.content.image.filename + "/m/2000x0"}
									alt={selectedImage.content.image.alt}
									className="h-full w-full object-contain transition-opacity duration-500"
									fill
									sizes="100vw"
								/>
							</motion.div>

							<motion.div
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 20, opacity: 0 }}
								className="relative hidden w-96 bg-white dark:bg-gray-400 p-6 md:block"
							>
								<button
									onClick={() => setSelectedImage(null)}
									className="absolute right-6 top-6 text-gray-900"
								>
									<FeatherIcon icon="x" size={24} />
									<span className="sr-only">Close</span>
								</button>
								<div className="space-y-6">
									<h2 className="text-xl">{selectedImage.name}</h2>
									<div className="space-y-1 text-sm text-gray-600">
										<div>{selectedImage.tag_list.join(" / ")}</div>
										<div className="italic">
											taken on {selectedImage.content.camera}
										</div>
									</div>
									<p className="text-sm leading-relaxed">
										{selectedImage.content.description}
									</p>
								</div>
							</motion.div>

							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: 20, opacity: 0 }}
								className="relative flex-1 bg-white p-6 md:hidden"
							>
								<button
									onClick={() => setSelectedImage(null)}
									className="absolute right-6 top-6 text-gray-900"
								>
									<FeatherIcon icon="x" size={24} />
									<span className="sr-only">Close</span>
								</button>
								<ScrollArea className="h-[40vh]">
									<div className="space-y-6">
										<h2 className="text-xl">{selectedImage.name}</h2>
										<div className="space-y-1 text-sm text-gray-600">
											<div>{selectedImage.tag_list.join(" / ")}</div>
											<div className="italic">
												taken on {selectedImage.content.camera}
											</div>
										</div>
										<p className="text-sm leading-relaxed">
											{selectedImage.content.description}
										</p>
									</div>
								</ScrollArea>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

function FilterContent({
	selectedTags,
	setSelectedTags,
	selectedMedium,
	setSelectedMedium,
	allTags,
}: {
	selectedTags: string[]
	setSelectedTags: (tags: string[]) => void
	selectedMedium: string | null
	setSelectedMedium: (medium: string | null) => void
	allTags: string[]
}) {
	return (
		<>
			<div className="space-y-2">
				<div className="text-sm font-medium text-gray-600">tags</div>
				<div className="flex flex-wrap gap-x-2 gap-y-1 text-lg">
					{allTags.map((tag, i) => (
						<React.Fragment key={tag}>
							{i > 0 && <span className="text-gray-400">/</span>}
							<button
								onClick={() =>
									setSelectedTags(
										selectedTags.includes(tag)
											? selectedTags.filter((t) => t !== tag)
											: [...selectedTags, tag]
									)
								}
								className="relative hover:opacity-70"
							>
								{tag}
								{selectedTags.includes(tag) && (
									<span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-black" />
								)}
							</button>
						</React.Fragment>
					))}
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium text-gray-600">medium</div>
				<div className="flex flex-wrap gap-x-2 gap-y-1 text-lg">
					{["digital", "film"].map((medium, i) => (
						<React.Fragment key={medium}>
							{i > 0 && <span className="text-gray-400">/</span>}
							<button
								onClick={() =>
									setSelectedMedium(selectedMedium === medium ? null : medium)
								}
								className="relative hover:opacity-70"
							>
								{medium}
								{selectedMedium === medium && (
									<span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-black" />
								)}
							</button>
						</React.Fragment>
					))}
				</div>
			</div>
		</>
	)
}
