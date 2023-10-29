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
				<main className="p-6 w-100vw">{children}</main>
			</body>
		</html>
	)
}
