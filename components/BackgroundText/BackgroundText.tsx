import { cn } from "@utils/cn.utils"

interface BackgroundTextProps {
	text: string | string[]
	className?: string
}

export function BackgroundText({ text, className }: BackgroundTextProps) {
	return (
		<div className="fixed inset-0 opacity-[.03] dark:opacity-[.02] pointer-events-none -z-10 blur-md">
			<div
				className={cn("text-gray-800 dark:text-white text-5xl font-serif font-bold", className)}
				style={{
					fontSize: `calc(round(calc(100vw/2.5),2px))`,
					maxWidth: "100vw",
				}}
			>
				{Array.isArray(text)
					? text.map((part, index) => (
							<span key={index} className={index > 0 ? "block" : undefined}>
								{part}
							</span>
					  ))
					: text}
			</div>
		</div>
	)
}
