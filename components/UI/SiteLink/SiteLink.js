import Link from "next/link";

const SiteLink = ({ children, href, ...props }) => {
	return (
		<Link href={href}>
			<a href={href} className="text-orange-400 transition-colors duration-200 hover:text-orange-600" {...props}>
				{children}
			</a>
		</Link>
	);
};

export default SiteLink;
