import cx from "classnames"
import ValidHeadings from "./headings.constants"
import classNames from "classnames"

const Heading = ({ children, ...props }) => {
	const {
		as,
		className,
		color,
		size,
		...rest
	}: {
		as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
		className?: string
		color?: string
		size?: string
	} = props

	const Tag = as ? as : "h2" // Default html tag to h2 if none is provided

	const Element = ValidHeadings[Tag]

	// Construct the classes together based on the theme provided
	const classes = classNames(
		Element,
		className
		// props.color ? props.color : Element.color,
	)

	return (
		<Tag id={props.id} className={classes} {...rest}>
			{children}
		</Tag>
	)
}
export default Heading
