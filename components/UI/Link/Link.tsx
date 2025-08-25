import { cn } from "@utils/cn.utils"
import { default as NextLink } from "next/link"

interface LinkProps {
	children: React.ReactNode | string
	href: string
	newTab?: boolean
	className?: string
	variant?: "primary" | "secondary" | "naked"
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const defaultClasses =
	"text-primary cursor-pointer relative hover:underline hover:underline-offset-4"
const variants = {
	primary:
		"text-black decoration-primary dark:text-primary font-bold dark:font-normal underline",
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
				className
			)}
			passHref
			onClick={onClick}
			{...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
			{...props}
			data-text={typeof children === "string" ? children.toString() : ""}
		>
			{children}
		</NextLink>
	)
}

export default Link
