import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const HeadingStyles = defineStyle({
	color: "orange.200",
	fontFamily: "mono",
	fontWeight: "semibold",
	_dark: {
		color: "yellow.300",
	},
})

const TextStyles = defineStyle({
	color: "orange.400",
})


export { HeadingStyles, TextStyles }