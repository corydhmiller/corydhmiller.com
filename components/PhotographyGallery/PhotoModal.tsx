"use client"

import { motion, AnimatePresence } from "framer-motion"
import FeatherIcon from "feather-icons-react"
import { ScrollArea } from "@components/UI/scroll-area"
import BlurImage from "../BlurImage"
import { cn } from "@/src/utils/cn.utils"
import { useState, useEffect } from "react"

type Photo = {
	id: number
	name: string
	slug: string
	tag_list: string[]
	content: {
		image: { filename: string; alt?: string }
		medium?: string
		camera?: string
		date?: string
		description?: string
	}
}

interface PhotoModalProps {
	selectedImage: Photo
	onClose: () => void
}

const KeyboardHint = () => {
	const [hasKeyboard, setHasKeyboard] = useState(false)
	const [showHint, setShowHint] = useState(true)

	useEffect(() => {
		// Check if hint was already dismissed this session
		const hintDismissed = sessionStorage.getItem("keyboardHintDismissed")
		if (hintDismissed) {
			setShowHint(false)
		}

		const checkKeyboard = () => {
			setHasKeyboard(
				!("ontouchstart" in window) || // No touch events
					navigator.maxTouchPoints === 0 // No touch points
			)
		}

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
				setShowHint(false)
				sessionStorage.setItem("keyboardHintDismissed", "true")
			}
		}

		checkKeyboard()
		window.addEventListener("resize", checkKeyboard)
		window.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("resize", checkKeyboard)
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	if (!hasKeyboard || !showHint) return null

	return (
		<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-300 bg-black/80 border border-primary px-3 py-1 rounded-full whitespace-nowrap text-center">
			Use <kbd>←</kbd> / <kbd>→</kbd> keys to navigate photos
		</div>
	)
}

function ActionButton({
	onClick,
	icon,
	ariaLabel,
	className,
	variant = "dark",
	children,
}: {
	onClick: () => void
	icon: string
	ariaLabel?: string
	className?: string
	variant?: "dark" | "light"
	children?: React.ReactNode
}) {
	const baseClasses =
		"inline-flex items-center gap-2 rounded-full border transition-colors focus:outline-none focus:ring-2"
	const colorClasses =
		variant === "light"
			? "text-white bg-white/10 border-white/20 hover:bg-white/20 focus:ring-white/40"
			: "text-white bg-black/60 border-white/20 hover:bg-black/50 focus:ring-white/40"
	return (
		<button
			onClick={onClick}
			className={cn(baseClasses, colorClasses, "p-2", className)}
			aria-label={ariaLabel}
		>
			<FeatherIcon icon={icon} size={20} />
			{children}
		</button>
	)
}

export function PhotoModal({ selectedImage, onClose }: PhotoModalProps) {
	const [isLoading, setIsLoading] = useState(true)
	const [currentImage, setCurrentImage] = useState<Photo>(selectedImage)
	const [showInfo, setShowInfo] = useState(false)

	// Close only the visible layer on Escape
	useEffect(() => {
		const handleEscCapture = (e: KeyboardEvent) => {
			if (e.key === "Escape" && showInfo) {
				e.preventDefault()
				e.stopPropagation()
				e.stopImmediatePropagation()
				setShowInfo(false)
			}
		}
		if (showInfo) {
			window.addEventListener("keydown", handleEscCapture, true)
			return () => window.removeEventListener("keydown", handleEscCapture, true)
		}
	}, [showInfo])

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape" && !showInfo) {
				onClose()
			}
			if (e.key === "i" && !showInfo) {
				setShowInfo(true)
			}
		}
		window.addEventListener("keydown", handleEsc)
		return () => window.removeEventListener("keydown", handleEsc)
	}, [onClose, showInfo])

	// Update current image when selected image changes
	useEffect(() => {
		setIsLoading(true)
		setCurrentImage(selectedImage)
		setShowInfo(false)
	}, [selectedImage])

	if (!selectedImage) return null

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className="fixed inset-0 z-50 flex flex-col lg:items-end lg:justify-center backdrop-blur-md bg-gray-800 bg-opacity-90"
		>
			<div className="flex h-full w-full flex-col lg:flex-row lg:mx-auto">
				<motion.div
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0.9 }}
					transition={{ duration: 0.3 }}
					className="relative h-[100vh] w-full lg:h-screen lg:flex-grow"
					onClick={(e) => e.stopPropagation()}
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={currentImage.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute inset-0"
						>
							{isLoading && (
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
								</div>
							)}

							<BlurImage
								src={currentImage.content.image.filename + "/m/2000x0"}
								alt={currentImage.content.image.alt}
								className="h-full w-full object-contain"
								fill
								sizes="100vw"
								onLoad={() => setIsLoading(false)}
							/>
						</motion.div>
					</AnimatePresence>
					<KeyboardHint />

					{/* Modal close button */}
					<ActionButton
						onClick={onClose}
						icon="x"
						className="absolute top-4 right-4 z-30"
						ariaLabel="Close photo"
					/>

					{/* Info toggle button */}
					<ActionButton
						onClick={() => setShowInfo(true)}
						icon="info"
						className="absolute bottom-4 right-4 z-30 p-2"
						ariaLabel="Show photo information"
					/>

					{/* Fullscreen info overlay */}
					<AnimatePresence>
						{showInfo && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="absolute inset-0 z-40"
							>
								<div
									className="absolute inset-0 bg-black/95 backdrop-blur-md"
									onClick={() => setShowInfo(false)}
								/>
								<div className="absolute inset-0">
									<ScrollArea className="h-full w-full">
										<div className="relative mx-auto max-w-2xl w-full p-6 sm:p-8 text-white">
											<ActionButton
												onClick={() => setShowInfo(false)}
												icon="x"
												className="absolute right-4 top-4 z-10"
												ariaLabel="Close info overlay"
											/>
											<h2 className="text-3xl sm:text-4xl font-semibold hyphens-manual mr-10">
												{currentImage.name}
											</h2>
											<div className="mt-3 space-y-1 text-sm text-gray-200">
												<div>{currentImage.tag_list.join(" / ")}</div>
												{currentImage.content.camera && (
													<div className="italic">
														taken on {currentImage.content.camera}
													</div>
												)}
											</div>
											{currentImage.content.description && (
												<p className="mt-6 text-base leading-relaxed text-gray-100">
													{currentImage.content.description}
												</p>
											)}
										</div>
									</ScrollArea>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</motion.div>
	)
}
