import Content from "@components/Content"
import Prose from "@components/Prose"
import Link from "@components/UI/Link"
import Image from "next/image"
import Heading from "@components/Typography/Heading"
import { StoryblokImage } from "@/components/StoryblokImage/StoryblokImage"

export default function About() {
	return (
		<>
			<div className="max-w-7xl mx-auto sm:-mb-64">
				<StoryblokImage
					src="https://a.storyblok.com/f/313088/1800x1199/94a7598a0a/corymiller-about-main.jpg"
					alt="Cory Miller"
					width={1200}
					height={600}
					quality={60}
					priority
					className="w-full h-auto rounded-lg"
				/>
			</div>
			<Content>
				<Prose className="mt-12 sm:mt-24 max-w-7xl sm:dark:bg-gray-800/80 relative px-4 -mx-4 sm:bg-gray-100/80 rounded-t">
					<Heading as="h1">I&apos;m Cory Miller.</Heading>
				</Prose>
				<Prose className="mb-24 relative px-4 -mx-4 sm:dark:bg-gray-800/80 sm:bg-gray-100/80 rounded-b">
					<p>
						I was born in Washington, raised in California, and currently live
						in Vienna, Austria. I&apos;m a photographer, web engineer, musician,
						and creative at heart.
					</p>

					<h2 className="font-bold">What I Do</h2>
					<ul className="list-disc list-inside pl-0">
						<li>
							I take pictures of people around the world, streets photography
							and portraits.
						</li>
						<li>
							I write and produce music under the band{" "}
							<Link
								href="https://open.spotify.com/artist/5Xrdve5OCxSHoNZDUWCAN0?si=yXzv41aGS_ydhr-GJUk_4Q"
								variant="primary"
								newTab
							>
								Season Cove
							</Link>
							.
						</li>
						<li>
							I work at{" "}
							<Link href="https://kit.com" variant="primary" newTab>
								Kit
							</Link>{" "}
							where I run the marketing site as the Lead Web Engineer.
						</li>
					</ul>

					<h2 className="font-bold">What I Use</h2>
					<p>
						I don&apos;t have any brand loyalty or affiliations, all of the
						cameras and technology I use is from years of trial and error, or
						just for the sake of fun.
					</p>
					<p>Here&apos;s a list of some of the equipment I use:</p>
					<ul className="list-disc list-inside pl-0">
						<li>
							Cameras
							<ul className="list-disc list-inside sm:ml-4">
								<li>Sony A7CR</li>
								<li>Canon AE-1 Program</li>
								<li>Minolta SRT-101</li>
								<li>Yashica Electro 35</li>
							</ul>
						</li>
						<li>
							Lenses
							<ul className="list-disc list-inside sm:ml-4">
								<li>Sony FE 24-50 f/2.8</li>
								<li>Sony FE 40mm f/2.5 G</li>
								<li>Sony FE 85mm f/1.8</li>
							</ul>
						</li>
					</ul>

					<h2 className="font-bold">Get in Touch</h2>
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
	title: "About Me",
	description: "Learn more about Cory Miller, photographer and web engineer.",
	openGraph: {
		title: "About - Cory Miller",
		description: "Learn more about Cory Miller, photographer and web engineer.",
		url: "https://corydhmiller.com/about",
		siteName: "Cory Miller",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: `https://corydhmiller.com/og?title=About - Cory Miller&image=https://a.storyblok.com/f/313088/1800x1199/94a7598a0a/corymiller-about-main.jpg`,
			},
		],
	},
}
