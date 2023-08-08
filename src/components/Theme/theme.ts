import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { colors } from "./colors"
import { HeadingStyles, TextStyles } from "./styles"

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
}

const styles = {
	global: (props) => ({
		body: {
			bg: props.colorMode === "dark" ? "black" : "gray.300",
		},
	}),
}

const theme = extendTheme({
	fonts: {
		heading: `"Juana", serif`,
		body: `"HKGrotesk", sans-serif`,
	},
	colors,
	styles,
	config,
	components: {
		Heading: HeadingStyles,
	},
})

export default theme
