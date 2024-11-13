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
				"prose prose-2xl prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent prose-h1:text-4xl sm:prose-h1:text-8xl",
				className
			)}
		>
			{children}
		</div>
	)
}

export default Prose
