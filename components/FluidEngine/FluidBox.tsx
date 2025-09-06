"use client"
import styled from "styled-components"

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
	const getResponsiveValue = (value: number | number[], property: string) => {
		if (typeof value === "number") {
			return `${property}: ${value};`
		}

		const breakpoints = ["", "480px", "768px", "1024px"]
		let css = ""

		value.forEach((val, index) => {
			if (index === 0) {
				css += `${property}: ${val};\n\t\t`
			} else if (breakpoints[index]) {
				css += `@media (min-width: ${breakpoints[index]}) {\n\t\t\t${property}: ${val};\n\t\t}\n\t\t`
			}
		})

		return css
	}

	const FluidBox = styled.div`
		${getResponsiveValue(rowStart, "grid-row-start")}
		${getResponsiveValue(rowEnd, "grid-row-end")}
		${getResponsiveValue(colStart, "grid-column-start")}
		${getResponsiveValue(colEnd, "grid-column-end")}
	`
	return <FluidBox className={`fluid-box ${className}`}>{children}</FluidBox>
}

export default FluidBox
