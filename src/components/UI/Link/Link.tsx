import { default as NextLink } from "next/link"

interface LinkProps {
	children: JSX.Element | string
	href: string
	newTab?: boolean
}

const Link = ({ children, href, newTab, ...props }: LinkProps) => {
	return (
		<NextLink
			href={href}
			className="text-orange-400 transition-colors duration-200 hover:text-orange-600"
			passHref
			{...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
			{...props}
		>
			{children}
		</NextLink>
	)
}

export default Link
