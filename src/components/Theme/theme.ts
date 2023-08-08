import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { colors } from "./colors"

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false,
}

const styles = {
	global: (props) => ({
		body: {
			color: props.colorMode === "dark" ? "gray.300" : "black",
			bg: props.colorMode === "dark" ? "black" : "gray.300",
		},
		h1: {
			color: props.colorMode === "dark" ? "orange.200" : "purple.400",
		},
    h2: {
      color: props.colorMode === "dark" ? "orange.200" : "purple.400",
    },
    h3: {
      color: props.colorMode === "dark" ? "orange.200" : "purple.400",
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
	components: {},
})

export default theme
