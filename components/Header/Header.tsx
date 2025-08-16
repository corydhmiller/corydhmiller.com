import Link from "../UI/Link"
import { DarkModeToggle } from "../UI/DarkModeToggle/DarkModeToggle"
import { MobileMenu } from "../UI/MobileMenu/MobileMenu"
import { cn } from "@/src/utils/cn.utils"

const links = [
	{ href: "/blog", label: "Blog" },
	{ href: "/photography", label: "Photography" },
	{ href: "/about", label: "About" },
]

export const Header = () => {
	return (
		<header
			className={cn(
				"px-2 py-3 w-100vw flex justify-between items-center relative",
				"bg-white dark:bg-gray-800",
			)}
		>
			<Link href="/" variant="primary">
				<div
					className={`text-gray-400 dark:text-gray-500 font-serif transform inline-block font-bold text-6xl cursor-pointer hover:text-primary focus:text-secondary transition-colors duration-500`}
				>
					/C
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
