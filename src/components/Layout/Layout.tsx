import { Box } from "@chakra-ui/react"
import Header from "@components/Header"

const Layout = ({ children }) => {
	return (
		<>
			<Box p={6} w="100vw">
				<Header />
				<main>{children}</main>
			</Box>
		</>
	)
}
export default Layout
