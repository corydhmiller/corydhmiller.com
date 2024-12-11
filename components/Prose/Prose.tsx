import { cn } from "@utils/cn.utils"
import React from "react"

const Prose = ({
	children,
	className,
}: {
	children: React.ReactNode | React.ReactNodeArray
	className?: string
}) => {
	return (
		<div
			className={cn(
				"prose prose-2xl prose-pre:bg-transparent",
				"prose-headings:text-gray-800 dark:prose-headings:text-white",
				"prose-strong:text-gray-800 dark:prose-strong:text-white",
				"prose-h1:text-4xl  sm:prose-h1:text-8xl text-gray-800 dark:text-white",
				className
			)}
		>
			{children}
		</div>
	)
}

export default Prose
