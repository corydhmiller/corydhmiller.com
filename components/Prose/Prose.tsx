import { cn } from "@utils/cn.utils"
import React from "react"

const Prose = ({
	children,
	className,
}: {
	children: React.ReactNode | React.ReactNode[]
	className?: string
}) => {
	return <div className={cn(className)}>{children}</div>
}

export default Prose
