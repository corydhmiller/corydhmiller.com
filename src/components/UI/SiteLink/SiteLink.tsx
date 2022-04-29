import Link from "next/link"

interface SiteLinkProps {
	children: JSX.Element | string
	href: string
	props: {}
}

const SiteLink = ({ children, href, ...props }: SiteLinkProps) => {
	return (
		<Link href={href}>
			<a
				href={href}
				className="text-orange-400 transition-colors duration-200 hover:text-orange-600"
				{...props}
			>
				{children}
			</a>
		</Link>
	)
}

export default SiteLink
