import { CSSProperties } from "react"
import styles from "./FluidBox.module.css"

interface FluidBoxProps {
	rowStart: number | number[]
	rowEnd: number | number[]
	colStart: number | number[]
	colEnd: number | number[]
	children?: React.ReactNode
	className?: string
}

const FluidBox: React.FC<FluidBoxProps> = ({
	rowStart,
	rowEnd,
	colStart,
	colEnd,
	children,
	className = "",
}) => {
	const getCSSProperties = (
		rowStart: number | number[],
		rowEnd: number | number[],
		colStart: number | number[],
		colEnd: number | number[]
	): CSSProperties => {
		const cssVars: Record<string, string> = {}

		const setResponsiveVars = (value: number | number[], prefix: string) => {
			if (typeof value === "number") {
				cssVars[`--${prefix}`] = value.toString()
			} else {
				const breakpoints = ["", "480", "768", "1024"]
				value.forEach((val, index) => {
					const suffix = breakpoints[index] ? `-${breakpoints[index]}` : ""
					cssVars[`--${prefix}${suffix}`] = val.toString()
				})
			}
		}

		setResponsiveVars(rowStart, "row-start")
		setResponsiveVars(rowEnd, "row-end")
		setResponsiveVars(colStart, "col-start")
		setResponsiveVars(colEnd, "col-end")

		return cssVars as CSSProperties
	}

	const inlineStyles = getCSSProperties(rowStart, rowEnd, colStart, colEnd)

	return (
		<div className={`${styles.fluidBox} ${className}`} style={inlineStyles}>
			{children}
		</div>
	)
}

export default FluidBox
