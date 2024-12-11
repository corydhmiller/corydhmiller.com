import { BackgroundText } from "@/components/BackgroundText"
import PhotographyGallery from "@components/PhotographyGallery"
import { Metadata } from "next"

export default function Photography() {
	return (
		<div>
			<BackgroundText text={["Photo", "graphy"]} />
			<PhotographyGallery />
		</div>
	)
}

export const metadata: Metadata = {
	metadataBase: new URL("https://corydhmiller.com"),
	title: {
		default: "Photography",
		template: "%s - Cory Miller",
	},
	description:
		"A gallery of my film and digital photography, including street photography, landscapes, and portraits.",
	openGraph: {
		title: "Photography",
		description: "Photography by Cory",
		url: "https://corydhmiller.com/photography",
		siteName: "Cory Miller",
		locale: "en_US",
		images: [{ url: "https://corydhmiller.com/og?title=My+photography" }],
	},
}
