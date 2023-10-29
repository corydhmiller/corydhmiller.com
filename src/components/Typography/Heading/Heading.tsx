import cx from "classnames"
import ValidHeadings from "./headings.constants"

const Heading = ({ children, ...props }) => {
	const {
		as,
		className,
		color,
		size,
		...rest
	}: {
		as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
		className?: object
		color?: string
		size?: string
	} = props

	const Tag = as ? as : "h2" // Default html tag to h2 if none is provided

	const Element = ValidHeadings[Tag]

	// Construct the classes together based on the theme provided
	const classes = cx(
		Element.size,
		// props.color ? props.color : Element.color,
		className
	)

	return (
		<Tag id={props.id} className={classes} {...rest}>
			{children}
		</Tag>
	)
}
export default Heading
