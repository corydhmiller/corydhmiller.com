import { ChakraProvider } from "@chakra-ui/react"
import theme from "@components/Theme"
import Fonts from "@components/Theme/Fonts"
import "@styles/app.css"

interface AppProps {
	Component: any
	pageProps?: {}
}

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default App
