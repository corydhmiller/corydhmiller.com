"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, X } from "lucide-react"
import { ScrollArea } from "@components/UI/scroll-area"
import { cn } from "@utils/cn.utils"
import { photos } from "./photos"
import BlurImage from "../BlurImage"

export default function PortfolioComponent() {
	const [selectedImage, setSelectedImage] = React.useState(null)
	const [isFilterOpen, setIsFilterOpen] = React.useState(false)
	const [selectedTags, setSelectedTags] = React.useState([])
	const [selectedMedium, setSelectedMedium] = React.useState(null)
	const [loadedImages, setLoadedImages] = React.useState({})

	const filteredPhotos = React.useMemo(() => {
		if (selectedTags.length === 0 && !selectedMedium) return photos
		return photos.filter(
			(photo) =>
				(selectedTags.length === 0 ||
					selectedTags.some((tag) => photo.tags.includes(tag))) &&
				(!selectedMedium || photo.medium === selectedMedium)
		)
	}, [selectedTags, selectedMedium])

	const allTags = Array.from(new Set(photos.flatMap((photo) => photo.tags)))

	// Function to take an image src and return a unique but repeatable number
	const hashSrcToNumber = (src: string) => {
		return src.split("/").reduce((acc, part) => acc * part.length, 1)
	}

	const handleImageLoad = (src) => {
		setLoadedImages((prev) => ({ ...prev, [src]: true }))
	}

	return (
		<div className="min-h-screen">
			<div className="sticky top-0 z-10 p-6 md:hidden">
				<div className="relative">
					<button
						onClick={() => setIsFilterOpen(!isFilterOpen)}
						className="flex items-center gap-2 text-sm text-gray-600"
					>
						filter
						<ChevronDown
							className={cn(
								"h-4 w-4 transition-transform",
								isFilterOpen && "rotate-180"
							)}
						/>
					</button>

					<AnimatePresence>
						{isFilterOpen && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeOut" }}
								className="absolute left-0 top-8 z-20 space-y-6 overflow-hidden pt-4"
							>
								<FilterContent
									selectedTags={selectedTags}
									setSelectedTags={setSelectedTags}
									selectedMedium={selectedMedium}
									setSelectedMedium={setSelectedMedium}
									allTags={allTags}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>

			<div className="flex flex-col md:flex-row">
				<ScrollArea className="flex-grow">
					<div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
						{filteredPhotos.map((photo) => (
							<motion.div
								key={hashSrcToNumber(photo.src)}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<motion.div
									whileHover={{ scale: 1.02 }}
									transition={{ duration: 0.4, ease: "easeOut" }}
									onClick={() => setSelectedImage(photo)}
									className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-sm max-w-[500px]"
								>
									<BlurImage
										src={photo.src + "/m/500x0"}
										alt={photo.alt}
										className="object-cover"
										fill
									/>
								</motion.div>
							</motion.div>
						))}
					</div>
				</ScrollArea>

				<div className="hidden w-96 p-6 md:block">
					<div className="sticky top-6">
						<div className="relative">
							<button
								onClick={() => setIsFilterOpen(!isFilterOpen)}
								className="flex items-center gap-2 text-sm text-gray-600"
							>
								filter
								<ChevronDown
									className={cn(
										"h-4 w-4 transition-transform",
										isFilterOpen && "rotate-180"
									)}
								/>
							</button>

							<AnimatePresence>
								{isFilterOpen && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeOut" }}
										className="absolute left-0 top-8 space-y-6 pt-4"
									>
										<FilterContent
											selectedTags={selectedTags}
											setSelectedTags={setSelectedTags}
											selectedMedium={selectedMedium}
											setSelectedMedium={setSelectedMedium}
											allTags={allTags}
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
						className="fixed inset-0 z-50 flex md:items-center md:justify-center backdrop-blur-sm bg-gray-100 bg-opacity-90"
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
									src={selectedImage.src + "/m/2000x0"}
									alt={selectedImage.alt}
									className="h-full w-full object-contain transition-opacity duration-500"
									fill
									sizes="100vw"
								/>
							</motion.div>

							<motion.div
								initial={{ x: 20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 20, opacity: 0 }}
								className="relative hidden w-96 bg-white p-6 md:block"
							>
								<button
									onClick={() => setSelectedImage(null)}
									className="absolute right-6 top-6 text-gray-900"
								>
									<X className="h-6 w-6" />
									<span className="sr-only">Close</span>
								</button>
								<div className="space-y-6">
									<h2 className="text-xl">{selectedImage.title}</h2>
									<div className="space-y-1 text-sm text-gray-600">
										<div>{selectedImage.tags.join(" / ")}</div>
										<div className="italic">
											taken on {selectedImage.camera}
										</div>
									</div>
									<p className="text-sm leading-relaxed">
										{selectedImage.description}
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
									<X className="h-6 w-6" />
									<span className="sr-only">Close</span>
								</button>
								<ScrollArea className="h-[40vh]">
									<div className="space-y-6">
										<h2 className="text-xl">{selectedImage.title}</h2>
										<div className="space-y-1 text-sm text-gray-600">
											<div>{selectedImage.tags.join(" / ")}</div>
											<div className="italic">
												taken on {selectedImage.camera}
											</div>
										</div>
										<p className="text-sm leading-relaxed">
											{selectedImage.description}
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
