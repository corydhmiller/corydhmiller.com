import React from "react"
import Link from "../Link"
import { cn } from "@/src/utils/cn.utils"

interface ButtonProps {
	href?: string
	children: React.ReactNode
	onClick?: () => void
	className?: string
	variant?: "primary" | "secondary" | "ghost"
}

const Button: React.FC<ButtonProps> = ({
	href,
	children,
	onClick,
	className,
	variant = "primary",
}) => {
	const defaultClasses = "px-2 py-3 rounded-lg cursor-pointer text-lg"
	const variantClasses = {
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-white",
		ghost: "bg-transparent text-primary",
	}

	if (href) {
		return (
			<Link href={href} className={cn(defaultClasses, variantClasses[variant])}>
				{children}
			</Link>
		)
	}

	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	)
}

export default Button
