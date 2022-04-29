import classNames from "classnames"
import headingsConstants from "./headings.constants"

interface HeadingProps {
	color?: string
	size?: string
	className?: {}
}

const Heading = ({ children, ...props }) => {
	const { className = {}, size }: HeadingProps = props
	const Tag = props.as ? props.as : "h2" // Default html tag to h2 if none is provided
	const heading = headingsConstants[Tag]

	return (
		<Tag
			className={classNames(
				heading.classes,
				className,
				heading.size,
				(`${heading.color.default}`)
			)}
		>
			{children}
		</Tag>
	)
}

export default Heading
