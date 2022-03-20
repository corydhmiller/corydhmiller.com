import classNames from "classnames"
import headingsConstants from "./headings.constants"

interface HeadingProps {
	level: string
	color?: string
	size?: string
	className?: {}
	children: JSX.Element | string
}

const Heading = ({
	level,
	className = {},
	color,
	size,
	children,
}: HeadingProps) => {
	const Tag = `${level}` || "h1"
	const heading = headingsConstants[Tag]

	return (
		<Tag
			className={classNames(
				heading.classes,
				className,
				size ? `text-${size}` : heading.size,
				(color = `text-${color || heading.color.default}`)
			)}
		>
			{children}
		</Tag>
	)
}

export default Heading
