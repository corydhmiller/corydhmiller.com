import { default as NextLink } from "next/link"
import { cn } from "@utils/cn.utils"

interface LinkProps {
	children: JSX.Element | string
	href: string
	newTab?: boolean
	className?: string
	variant?: "primary" | "secondary" | "naked"
}

const variants = {
	primary: "no-underline hover:underline",
	secondary: "no-underline hover:underline",
	naked: "",
}

const Link = ({ children, href, newTab, className, ...props }: LinkProps) => {
	return (
		<NextLink
			href={href}
			className={cn(className, variants[props.variant || "primary"])}
			passHref
			{...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
			{...props}
		>
			{children}
		</NextLink>
	)
}

export default Link
