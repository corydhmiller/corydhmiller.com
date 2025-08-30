import { cn } from "@utils/cn.utils"
import React from "react"

const Prose = ({
	children,
	className,
}: {
	children: React.ReactNode | React.ReactNode[]
	className?: string
}) => {
	return (
		<div
			className={cn(
				"prose-xl prose-pre:bg-transparent prose-p:max-w-3xl prose-headings:text-gray-800 dark:prose-headings:text-white prose-strong:text-gray-800 dark:prose-strong:text-white prose-h1:text-3xl sm:prose-h1:text-8xl text-gray-800 dark:text-white text-balance prose-figcaption:text-sm sm:prose-figcaption:text-base prose-figcaption:italic prose-img:max-w-3xl prose-img:w-full",
				className
			)}
		>
			{children}
		</div>
	)
}

export default Prose
