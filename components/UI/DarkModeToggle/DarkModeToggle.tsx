"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		setIsDark(document.documentElement.classList.contains('dark'))
	}, [])

	const toggleDarkMode = () => {
		const newTheme = !isDark ? "dark" : "light"
		document.documentElement.classList.toggle('dark')
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
			{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
		</button>
	)
}
