import { ElementType, HTMLAttributes } from "react"
import cx from "classnames"
import ValidHeadings from "./headings.constants"

const Heading = ({ children, ...props }) => {
	const {
		className,
		color,
		size,
		...rest
	}: { className?: object; color?: string; size?: string } = props

	const Tag = props.as ? props.as : "h2" // Default html tag to h2 if none is provided

	const Element = ValidHeadings[Tag]

	// Construct the classes together based on the theme provided
	const classes = cx(
		Element.size,
		Element.className,
		props.color ? props.color : Element.color.default,
		`mb-8`
	)

	return (
		<Tag id={props.id} className={classes} {...rest}>
			{children}
		</Tag>
	)
}
export default Heading