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

const defaultClasses =
	"no-underline hover:underline text-primary cursor-pointer decoration-2 underline-offset-2 decoration-solid"
const variants = {
	primary: "text-primary decoration-primary",
	secondary: "text-secondary decoration-secondary",
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
			className={cn(
				defaultClasses,
				variants[props.variant || "primary"],
				className,
			)}
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
