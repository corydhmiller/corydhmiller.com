import React from "react"
import cx from "classnames"

export const Paragraph = ({
	children,
	props,
}: {
	children: React.ReactNode
	props?: React.HTMLProps<HTMLParagraphElement>
}) => {
	
	const classes = cx("mb-4 leading-relaxed", props?.className)
	
	return <p className={classes}>{children}</p>
}
