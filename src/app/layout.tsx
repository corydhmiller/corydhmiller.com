import "@styles/app.css"
import "@public/fonts/fonts.css"
import Header from "@components/Header"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main className="wrapper">{children}</main>
			</body>
		</html>
	)
}
