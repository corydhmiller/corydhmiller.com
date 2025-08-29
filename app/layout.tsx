import "@/src/styles/app.css"
import type { Metadata } from "next"
import "../public/fonts/fonts.css"
import Header from "@components/Header"
import { themeScript } from "./theme-utils"
import { Footer } from "@/components/Footer"

const imageUrl = `https://corydhmiller.com/og?title=${"Photography by Cory"}&image=https://corydhmiller.com/images/about-cory-miller.jpeg`,
	title = "Photography by Cory Miller",
	description =
		"A portfolio of photography, music, and various thoughts on other stuff I'm interested in."

export const metadata: Metadata = {
	metadataBase: new URL("https://corydhmiller.com"),
	title: {
		default: title,
		template: "%s - Cory Miller",
	},
	description,
	manifest: "/site.webmanifest",
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{
				url: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title,
		description,
		url: "https://corydhmiller.com",
		siteName: "Cory Miller",
		locale: "en_US",
		type: "website",
		images: [{ url: imageUrl }],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Cory Miller",
		card: "summary_large_image",
		images: [{ url: imageUrl }],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-300 flex flex-col">
				<Header />
				<main className="wrapper flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
