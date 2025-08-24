"use client"

import { useEffect, useState } from "react"
import FeatherIcon from "feather-icons-react"
import { getThemePreference, toggleTheme } from "@/lib/theme"

export function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		setIsDark(getThemePreference() === 'dark')
	}, [])

	const handleToggle = () => {
		const newTheme = toggleTheme()
		setIsDark(newTheme === 'dark')
	}

	if (!mounted) return null

	return (
		<button
			onClick={handleToggle}
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
