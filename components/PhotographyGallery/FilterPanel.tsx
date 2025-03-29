"use client"
import { AnimatePresence, motion } from "framer-motion"
import FeatherIcon from "feather-icons-react"
import { cn } from "@utils/cn.utils"
import { Fragment } from "react"

interface FilterPanelProps {
	isFilterOpen: boolean
	setIsFilterOpen: (open: boolean) => void
	selectedTags: string[]
	setSelectedTags: (tags: string[]) => void
	selectedMedium: string[]
	setSelectedMedium: (medium: string[]) => void
	selectedCamera: string[]
	setSelectedCamera: (camera: string[]) => void
	allTags: string[]
	allCameras: string[]
	isMobile?: boolean
	resetAllFilters: () => void
}

export function FilterPanel({
	isFilterOpen,
	setIsFilterOpen,
	selectedTags,
	setSelectedTags,
	selectedMedium,
	setSelectedMedium,
	selectedCamera,
	setSelectedCamera,
	allTags,
	allCameras,
	isMobile = false,
	resetAllFilters,
}: FilterPanelProps) {
	const containerClasses = isMobile
		? "sticky top-0 z-10 md:hidden bg-white w-full dark:bg-gray-800"
		: "hidden w-96 p-6 md:block flex-shrink-0"

	const filterContentClasses = isMobile
		? "absolute left-0 top-8 z-20 space-y-6 overflow-hidden bg-white dark:bg-gray-800"
		: "absolute left-0 top-8 space-y-6 pt-4"

	return (
		<div className={containerClasses}>
			<div className={isMobile ? "relative w-full p-6" : "sticky top-6"}>
				<div className="relative">
					<div className="flex justify-between items-center">
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
						
						{(selectedTags.length > 0 || selectedMedium.length > 0 || selectedCamera.length > 0) && (
							<button 
								onClick={resetAllFilters} 
								className="text-sm text-gray-600 hover:text-primary"
							>
								Reset all
							</button>
						)}
					</div>

					<AnimatePresence>
						{isFilterOpen && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className={filterContentClasses}
							>
								<div className={isMobile ? "p-6" : ""}>
									<FilterContent
										selectedTags={selectedTags}
										setSelectedTags={setSelectedTags}
										selectedMedium={selectedMedium}
										setSelectedMedium={setSelectedMedium}
										selectedCamera={selectedCamera}
										setSelectedCamera={setSelectedCamera}
										allTags={allTags}
										allCameras={allCameras}
									/>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

function FilterContent({
	selectedTags,
	setSelectedTags,
	selectedMedium,
	setSelectedMedium,
	selectedCamera,
	setSelectedCamera,
	allTags,
	allCameras,
}: {
	selectedTags: string[]
	setSelectedTags: (tags: string[]) => void
	selectedMedium: string[]
	setSelectedMedium: (medium: string[]) => void
	selectedCamera: string[]
	setSelectedCamera: (camera: string[]) => void
	allTags: string[]
	allCameras: string[]
}) {
	return (
		<>
			<div className="space-y-2">
				<div className="text-sm font-medium text-gray-600">tags</div>
				<div className="flex flex-wrap gap-x-2 gap-y-1 text-lg">
					{allTags.map((tag, i) => (
						<Fragment key={tag}>
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
									<span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
								)}
							</button>
						</Fragment>
					))}
				</div>
			</div>

			<div className="space-y-2 mt-4">
				<div className="text-sm font-medium text-gray-600">medium</div>
				<div className="flex flex-wrap gap-x-2 gap-y-1 text-lg">
					{["digital", "film"].map((medium, i) => (
						<Fragment key={medium}>
							{i > 0 && <span className="text-gray-400">/</span>}
							<button
								onClick={() =>
									setSelectedMedium(
										selectedMedium.includes(medium)
											? selectedMedium.filter((m) => m !== medium)
											: [...selectedMedium, medium]
									)
								}
								className="relative hover:opacity-70"
							>
								{medium}
								{selectedMedium.includes(medium) && (
									<span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
								)}
							</button>
						</Fragment>
					))}
				</div>
			</div>

			<div className="space-y-2 mt-4">
				<div className="text-sm font-medium text-gray-600">camera</div>
				<div className="flex flex-wrap gap-x-2 gap-y-1 text-lg">
					{allCameras.map((camera, i) => (
						<Fragment key={camera}>
							{i > 0 && <span className="text-gray-400">/</span>}
							<button
								onClick={() =>
									setSelectedCamera(
										selectedCamera.includes(camera)
											? selectedCamera.filter((c) => c !== camera)
											: [...selectedCamera, camera]
									)
								}
								className="relative hover:opacity-70"
							>
								{camera}
								{selectedCamera.includes(camera) && (
									<span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
								)}
							</button>
						</Fragment>
					))}
				</div>
			</div>
		</>
	)
}
