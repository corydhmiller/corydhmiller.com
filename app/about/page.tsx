import Content from "@components/Content"
import Prose from "@components/Prose"
import Link from "@components/UI/Link"
import Image from "next/image"

export default function About() {
	return (
		<>
			<Content>
				<div className="flex items-center justify-center relative">
					<div className="transform relative block">
						<div className="after:content-[''] after:absolute after:left-0 after:h-3/5 after:bottom-1 after:bg-primary after:rounded-t-full after:transition-all after:duration-300 after:ease-in-out after:-z-1 after:w-full"></div>
						<Image
							src="/images/cory-miller-profile-picture.png"
							alt="Cory Miller"
							width={384}
							height={384}
							className="w-48 sm:w-96 h-48 sm:h-96 z-1 relative"
						/>
					</div>
				</div>
			</Content>
			<div className="w-full bg-primary py-12 mb-24">
				<Content>
					<Prose className="prose-2xl text-6xl mx-auto text-center">
						<span className="text-black font-serif font-black">I'm Cory Miller.</span>
					</Prose>
				</Content>
			</div>
			<Content>
				<Prose className="prose-lg mx-auto mb-24">
					<p>
						I was born in Washington, raised in California, and currently live
						in Vienna, Austria. I&apos;m a photographer, web engineer, musician,
						and creative at heart.
					</p>

					<h2 className="text-5xl font-bold">What I Do</h2>
					<ul className="list-disc list-inside">
						<li>
							I work at{" "}
							<Link href="https://kit.com" variant="primary" newTab>
								Kit
							</Link>{" "}
							where I run the marketing site as the Lead Web Engineer.
						</li>
					</ul>

					<h2 className="text-5xl font-bold">Get in Touch</h2>
					<p>
						While I&apos;m not a big fan of social media, you can find me on{" "}
						<Link
							href="https://www.instagram.com/corydhmiller"
							variant="primary"
							newTab
						>
							Instagram
						</Link>{" "}
						or{" "}
						<Link
							href="https://bsky.app/profile/corydhmiller.com"
							variant="primary"
							newTab
						>
							Bluesky
						</Link>
						.
					</p>
				</Prose>
			</Content>
		</>
	)
}

export const metadata = {
	title: "About",
	description: "Learn more about Cory Miller, photographer and web engineer.",
	openGraph: {
		title: "About - Cory Miller",
		description: "Learn more about Cory Miller, photographer and web engineer.",
		url: "https://corydhmiller.com/about",
		siteName: "Cory Miller",
		locale: "en_US",
		type: "website",
	},
}
