import classNames from "classnames"
import { default as NextLink } from "next/link"

interface LinkProps {
	children: JSX.Element | string
	href: string
	newTab?: boolean
	className?: string
	variant?: "primary" | "secondary" | "naked"
}

const variants = {
	primary:
		"text-orange-400 transition-colors duration-200 hover:text-orange-600 no-underline",
	secondary:
		"text-blue-400 transition-colors duration-200 hover:text-orange-600 no-underline",
	naked: "",
}

const Link = ({ children, href, newTab, className, ...props }: LinkProps) => {
	return (
		<NextLink
			href={href}
			className={classNames(className, variants[props.variant || "primary"])}
			passHref
			{...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
			{...props}
		>
			{children}
		</NextLink>
	)
}

export default Link
