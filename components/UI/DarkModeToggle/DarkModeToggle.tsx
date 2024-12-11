"use client"

import { useEffect, useState } from "react"
import FeatherIcon from "feather-icons-react"

export function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		setIsDark(document.documentElement.classList.contains("dark"))
	}, [])

	const toggleDarkMode = () => {
		const newTheme = !isDark ? "dark" : "light"
		document.documentElement.classList.toggle("dark")
		localStorage.theme = newTheme
		setIsDark(!isDark)
	}

	if (!mounted) return null

	return (
		<button
			onClick={toggleDarkMode}
			className="p-2 rounded-lg bg-transparent transition-colors"
			aria-label="Toggle dark mode"
		>
			{isDark ? (
				<FeatherIcon icon="sun" size={16} />
			) : (
				<FeatherIcon icon="moon" size={16} />
			)}
		</button>
	)
}
