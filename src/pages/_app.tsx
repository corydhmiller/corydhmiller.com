import "@styles/app.css"
import "@public/fonts/fonts.css"

interface AppProps {
	Component: any
	pageProps?: {}
}
function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default App
