"use client"
import { useState, useEffect, useRef, ReactNode } from "react"

interface HoverGlowProps {
	children: ReactNode
	className?: string
}

export function HoverGlow({ children, className }: HoverGlowProps) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const maskRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (maskRef.current) {
				const rect = maskRef.current.getBoundingClientRect()
				setMousePosition({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
				})
			}
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [])

	return (
		<div className={`relative ${className}`}>
			{children}
			<div
				ref={maskRef}
				className="absolute blur-3xl top-0 left-0 w-full h-full pointer-events-none opacity-60"
				style={{
					WebkitMaskImage: `radial-gradient(circle 125px at ${mousePosition.x}px ${mousePosition.y}px, black 30%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)`,
					maskImage: `radial-gradient(circle 125px at ${mousePosition.x}px ${mousePosition.y}px, black 30%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)`,
				}}
			>
				{children}
			</div>
		</div>
	)
}
