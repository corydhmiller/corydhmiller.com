import type { Metadata } from "next"
import "@/src/styles/app.css"
import "../public/fonts/fonts.css"

import Header from "@components/Header"
import StoryblokProvider from "@/components/Storyblok/StoryblokProvider"
import { Scripts } from "./scripts"

const imageUrl = `https://corydhmiller.com/og?title=${"Hi! I'm Cory."}`,
	title = "Thoughts by Cory Miller",
	description =
		"A blog about web development, music, and various thoughts on other stuff I'm interested in."

export const metadata: Metadata = {
	metadataBase: new URL("https://corydhmiller.com"),
	title: {
		default: title,
		template: "%s - Cory Miller",
	},
	description,
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
		<StoryblokProvider>
			<html lang="en">
				<Scripts />
				<body className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-300">
					<Header />
					<main className="wrapper px-8">
						{children}
					</main>
				</body>
			</html>
		</StoryblokProvider>
	)
}
