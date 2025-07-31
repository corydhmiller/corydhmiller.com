import Link from "../UI/Link"

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="w-full py-12 px-8 mt-24 transition-colors duration-300">
			<div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
				<div className="h-px sm:w-1/2 dark:bg-white opacity-25 bg-black mb-12 md:col-span-3"></div>
				{/* About Summary */}
				<div className="space-y-4">
					<h3 className="text-xl font-bold text-gray-800 dark:text-white">
						About Me
					</h3>
					<p className="text-gray-400 dark:text-gray-400 text-lg">
						Web engineer, photographer, and musician based in Vienna, Austria.
						Currently working at Kit, specializing in React and Next.js
						development.
					</p>
				</div>

				{/* Quick Links */}
				<div className="space-y-4">
					<h3 className="text-xl font-bold text-gray-800 dark:text-white">
						Links
					</h3>
					<nav className="flex flex-col space-y-2 text-lg">
						<Link href="/blog" variant="primary">
							Blog
						</Link>
						<Link href="/photography" variant="primary">
							Photography
						</Link>
						<Link href="/about" variant="primary">
							About
						</Link>
					</nav>
				</div>

				{/* Social Links */}
				<div className="space-y-4">
					<h3 className="text-xl font-bold text-gray-800 dark:text-white">
						Connect
					</h3>
					<nav className="flex flex-col space-y-2 text-lg">
						<Link
							href="https://www.instagram.com/corydhmiller"
							variant="primary"
							newTab
						>
							Instagram
						</Link>
						<Link
							href="https://bsky.app/profile/corydhmiller.com"
							variant="primary"
							newTab
						>
							Bluesky
						</Link>
					</nav>
					<p className="text-sm text-gray-400 dark:text-gray-400 pt-4">
						© {currentYear} Cory Miller. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
