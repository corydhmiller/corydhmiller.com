"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		// Check initial dark mode preference
		const isDarkMode = document.documentElement.classList.contains('dark')
		setIsDark(isDarkMode)
	}, [])

	const toggleDarkMode = () => {
		if (isDark) {
			document.documentElement.classList.remove('dark')
			localStorage.theme = 'light'
		} else {
			document.documentElement.classList.add('dark')
			localStorage.theme = 'dark'
		}
		setIsDark(!isDark)
	}

	return (
		<button
			onClick={toggleDarkMode}
			className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
			aria-label="Toggle dark mode"
		>
			{isDark ? (
				<Sun className="h-5 w-5" />
			) : (
				<Moon className="h-5 w-5" />
			)}
		</button>
	)
}
