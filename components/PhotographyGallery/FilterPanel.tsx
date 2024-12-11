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
	selectedMedium: string | null
	setSelectedMedium: (medium: string | null) => void
	allTags: string[]
	isMobile?: boolean
}

export function FilterPanel({
	isFilterOpen,
	setIsFilterOpen,
	selectedTags,
	setSelectedTags,
	selectedMedium,
	setSelectedMedium,
	allTags,
	isMobile = false,
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
								className={filterContentClasses}
							>
								<div className={isMobile ? "p-6" : ""}>
									<FilterContent
										selectedTags={selectedTags}
										setSelectedTags={setSelectedTags}
										selectedMedium={selectedMedium}
										setSelectedMedium={setSelectedMedium}
										allTags={allTags}
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

			<div className="space-y-2">
				<div className="text-sm font-medium text-gray-600">medium</div>
				<div className="flex flex-wrap gap-x-2 gap-y-1 text-lg">
					{["digital", "film"].map((medium, i) => (
						<Fragment key={medium}>
							{i > 0 && <span className="text-gray-400">/</span>}
							<button
								onClick={() =>
									setSelectedMedium(selectedMedium === medium ? null : medium)
								}
								className="relative hover:opacity-70"
							>
								{medium}
								{selectedMedium === medium && (
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
