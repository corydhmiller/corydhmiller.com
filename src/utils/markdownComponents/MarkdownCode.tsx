import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const MarkdownCode = (props) => {
	const { children, className, node, ...rest } = props
	const match = /language-(\w+)/.exec(className || "")
	return match ? (
		<SyntaxHighlighter
			{...rest}
			// eslint-disable-next-line react/no-children-prop
			children={String(children).replace(/\n$/, "")}
			style={oneDark}
			language={match[1]}
			PreTag="div"
		/>
	) : (
		<code {...rest} className={className}>
			{children}
		</code>
	)
}
