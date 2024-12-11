import { motion } from "framer-motion"
import FeatherIcon from "feather-icons-react"
import { ScrollArea } from "@components/UI/scroll-area"
import BlurImage from "../BlurImage"
import { cn } from "@/src/utils/cn.utils"

interface PhotoModalProps {
	selectedImage: any
	onClose: () => void
}

export function PhotoModal({ selectedImage, onClose }: PhotoModalProps) {
	if (!selectedImage) return null

	return (
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

				{/* Desktop Info Panel */}
				<PhotoInfoPanel
					selectedImage={selectedImage}
					onClose={onClose}
					isMobile={false}
					className="hidden md:block"
				/>

				{/* Mobile Info Panel */}
				<PhotoInfoPanel
					selectedImage={selectedImage}
					onClose={onClose}
					isMobile
					className="md:hidden"
				/>
			</div>
		</motion.div>
	)
}

function PhotoInfoPanel({ selectedImage, onClose, isMobile, className }) {
	const baseClasses = isMobile
		? "relative flex-1 bg-white p-6"
		: "relative w-96 bg-white dark:bg-gray-400 p-6"

	const content = (
		<div className="space-y-6">
			<h2 className="text-xl">{selectedImage.name}</h2>
			<div className="space-y-1 text-sm text-gray-600">
				<div>{selectedImage.tag_list.join(" / ")}</div>
				<div className="italic">taken on {selectedImage.content.camera}</div>
			</div>
			<p className="text-sm leading-relaxed">
				{selectedImage.content.description}
			</p>
		</div>
	)

	const contentWrapper = isMobile ? (
		<ScrollArea className="h-[40vh]">{content}</ScrollArea>
	) : (
		content
	)

	return (
		<motion.div
			initial={isMobile ? { y: 20, opacity: 0 } : { x: 20, opacity: 0 }}
			animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
			exit={isMobile ? { y: 20, opacity: 0 } : { x: 20, opacity: 0 }}
			className={cn(baseClasses, className)}
		>
			<button
				onClick={onClose}
				className="absolute right-6 top-6 text-gray-900"
			>
				<FeatherIcon icon="x" size={24} />
				<span className="sr-only">Close</span>
			</button>
			{contentWrapper}
		</motion.div>
	)
}
