import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { cn } from "../cn.utils"

interface MarkdownCodeProps {
	children: string | string[]
	className?: string
	node?: any
	[key: string]: any
}

export const MarkdownCode = ({
	node,
	inline,
	className,
	children,
	...props
}: MarkdownCodeProps) => {
	const match = /language-(\w+)/.exec(className || "")

	return match ? (
		<SyntaxHighlighter
			style={oneDark}
			PreTag="div"
			language={match[1]}
			{...props}
		>
			{String(children).replace(/\n$/, "")}
		</SyntaxHighlighter>
	) : (
		<code
			className={cn(
				className,
				"bg-black bg-opacity-60 text-white dark:bg-white dark:bg-opacity-20 dark:text-white"
			)}
			{...props}
		>
			{children}
		</code>
	)
}
