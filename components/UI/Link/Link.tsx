import { default as NextLink } from "next/link"
import { cn } from "@utils/cn.utils"

interface LinkProps {
	children: React.ReactNode | string
	href: string
	newTab?: boolean
	className?: string
	variant?: "primary" | "secondary" | "naked"
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const variants = {
	primary:
		"no-underline hover:underline text-primary cursor-pointer decoration-primary decoration-2 underline-offset-2 decorat",
	secondary: "no-underline hover:underline",
	naked: "",
}

const Link = ({
	children,
	href,
	newTab,
	className,
	onClick,
	...props
}: LinkProps) => {
	return (
		<NextLink
			href={href}
			className={cn(className, variants[props.variant || "primary"])}
			passHref
			onClick={onClick}
			{...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
			{...props}
		>
			{children}
		</NextLink>
	)
}

export default Link
