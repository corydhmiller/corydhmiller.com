import { motion, AnimatePresence } from "framer-motion"
import FeatherIcon from "feather-icons-react"
import { ScrollArea } from "@components/UI/scroll-area"
import BlurImage from "../BlurImage"
import { cn } from "@/src/utils/cn.utils"
import { useState, useEffect } from "react"

interface PhotoModalProps {
	selectedImage: any
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
		<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-300 bg-black/80 border border-primary px-3 py-1 rounded-full">
			Use <kbd className="font-mono">←</kbd> /{" "}
			<kbd className="font-mono">→</kbd> keys to navigate photos
		</div>
	)
}

export function PhotoModal({ selectedImage, onClose }: PhotoModalProps) {
	const [isLoading, setIsLoading] = useState(true)
	const [currentImage, setCurrentImage] = useState(selectedImage)

	// Update current image when selected image changes
	useEffect(() => {
		setIsLoading(true)
		setCurrentImage(selectedImage)
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
				</motion.div>

				<PhotoInfoPanel
					selectedImage={currentImage}
					onClose={onClose}
					isMobile={window.innerWidth < 768}
					className="lg:max-w-[400px] lg:min-w-[400px]"
				/>
			</div>
		</motion.div>
	)
}

function PhotoInfoPanel({ selectedImage, onClose, isMobile, className }) {
	const baseClasses = "relative bg-white dark:bg-gray-400 p-6"

	const content = (
		<div className="space-y-6 pt-8">
			<button
				onClick={onClose}
				className="absolute right-4 top-4 text-gray-900 dark:text-gray-100 z-10 hover:opacity-75 transition-opacity"
			>
				<FeatherIcon icon="x" size={24} />
				<span className="sr-only">Close</span>
			</button>
			<h2 className="text-4xl dark:text-gray-100 font-semibold hyphens-manual">
				{selectedImage.name}
			</h2>
			<div className="space-y-1 text-sm text-gray-600 dark:text-white">
				<div>{selectedImage.tag_list.join(" / ")}</div>
				<div className="italic">taken on {selectedImage.content.camera}</div>
			</div>
			<p className="text-md leading-relaxed dark:text-gray-100">
				{selectedImage.content.description}
			</p>
		</div>
	)

	return (
		<motion.div
			initial={isMobile ? { y: 20, opacity: 0 } : { x: 20, opacity: 0 }}
			animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
			exit={isMobile ? { y: 20, opacity: 0 } : { x: 20, opacity: 0 }}
			className={cn(baseClasses, className)}
		>
			<ScrollArea className="h-full lg:h-auto max-h-[70vh] lg:max-h-[80vh]">
				{content}
			</ScrollArea>
		</motion.div>
	)
}
