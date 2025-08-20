"use client"
import FeatherIcon from "feather-icons-react"

import Link from "../Link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const links = [
	{ href: "/blog", label: "Blog" },
	{ href: "/photography", label: "Photography" },
	{ href: "/about", label: "About" },
]

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="md:hidden">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-500"
			>
				{isOpen ? (
					<FeatherIcon icon="x" size={24} />
				) : (
					<FeatherIcon icon="menu" size={24} />
				)}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="absolute left-0 right-0 top-[65px] bg-white shadow-lg z-50 dark:bg-black dark:bg-opacity-80 dark:backdrop-blur-lg"
					>
						<nav className="flex flex-col p-4">
							{links.map(({ href, label }, index) => (
								<span key={index}>
									<Link
										href={href}
										className="py-2"
										onClick={() => setIsOpen(false)}
									>
										{label}
									</Link>
								</span>
							))}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
