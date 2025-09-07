import { CSSProperties } from "react"
import styles from "./FluidEngine.module.css"

const FluidEngine = ({ rows = 129, columns = 24, children }) => {
	return (
		<div
			className={styles.FluidEngine}
			style={
				{ "--fluidRows": rows, "--fluidColumns": columns } as CSSProperties
			}
		>
			{children}
		</div>
	)
}

export default FluidEngine
