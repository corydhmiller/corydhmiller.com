"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const theme = document.documentElement.getAttribute("data-theme")
		setIsDark(theme === "dark")
	}, [])

	const toggleDarkMode = () => {
		const newTheme = !isDark ? "dark" : "light"

		// Update DOM
		if (newTheme === "dark") {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}

		// Update data attribute
		document.documentElement.setAttribute("data-theme", newTheme)

		// Update localStorage and trigger storage event
		localStorage.setItem("theme", newTheme)

		setIsDark(!isDark)
	}

	// Prevent hydration mismatch by not rendering until mounted
	if (!mounted) {
		return null
	}

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
