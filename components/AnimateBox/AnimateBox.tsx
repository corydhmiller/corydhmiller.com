"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const AnimateBox = ({ startY = 100, endY = -100, children }) => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	})

	const y = useTransform(scrollYProgress, [0, 1], [startY, endY])

	return (
		<motion.div ref={ref} style={{ y }}>
			{children}
		</motion.div>
	)
}

export default AnimateBox
