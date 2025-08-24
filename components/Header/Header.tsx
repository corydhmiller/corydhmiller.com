import Link from "../UI/Link"
import { DarkModeToggle } from "../UI/DarkModeToggle/DarkModeToggle"
import { MobileMenu } from "../UI/MobileMenu/MobileMenu"
import { cn } from "@/src/utils/cn.utils"
import Logo from "../Logo/Logo"

const links = [
	{ href: "/photography", label: "Gallery" },
	{ href: "/blog", label: "Blog" },
	{ href: "/about", label: "About" },
]

export const Header = () => {
	return (
		<header
			className={cn(
				"px-4 py-3 w-100vw flex justify-between items-center relative",
				"transition-colors duration-300 bg-white dark:bg-gray-800"
			)}
		>
			<Link href="/" variant="naked">
				<div
					className={`text-gray-400 dark:text-gray-500 font-serif transform cursor-pointer hover:text-primary focus:text-secondary transition-colors duration-500`}
				>
					<Logo width={85} />
				</div>
			</Link>

			<nav className="hidden md:flex items-center gap-8 px-4">
				{links.map(({ href, label }) => (
					<Link variant="primary" key={href} href={href}>
						{label}
					</Link>
				))}
			</nav>

			<div className="flex items-center gap-4">
				<DarkModeToggle />
				<MobileMenu />
			</div>
		</header>
	)
}
