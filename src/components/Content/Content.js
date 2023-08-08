import { Box } from "@chakra-ui/react"

const Content = ({ children }) => {
	return (
		<Box
			mx="auto"
			px={{ base: "6", lg: "8" }}
			py={{ base: "16", sm: "20" }}
			maxW="7xl"
		>
			{children}
		</Box>
	)
}

export default Content
