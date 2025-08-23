import Content from "@components/Content"
import Prose from "@components/Prose"
import Link from "@components/UI/Link"
import Image from "next/image"

export default function About() {
	return (
		<>
			<div className="grid sm:grid-cols-2 gap-4 mb-12">
				<Image
					src="/images/about-cory-miller.jpeg"
					alt="Cory Miller"
					width={717}
					height={477}
					quality={50}
					className="w-full h-auto object-cover rounded-b-2xl sm:rounded-bl-none"
				/>
				<div className="flex items-center justify-center relative">
					<span className="text-white font-serif text-3xl sm:text-6xl font-bold">
						I&apos;m Cory Miller.
					</span>
				</div>
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

					<h2 className="text-5xl font-bold">What I Use</h2>
					<p>
						I don't have any brand loyalty or affiliations, all of the cameras
						and technology I use is from years of trial and error, or just for
						the sake of fun.
					</p>
					<p>Here's a list of the equipment I use:</p>
					<ul className="list-disc list-inside">
						<li>
							Cameras
							<ul className="list-disc list-inside ml-4">
								<li>Sony A7C</li>
								<li>Fujifilm X-Pro 2</li>
								<li>Canon AE-1 Program</li>
								<li>Minolta SRT-101</li>
								<li>Yashica Electro 35</li>
							</ul>
						</li>
						<li>
							Lenses
							<ul className="list-disc list-inside ml-4">
								<li>Sony FE 40mm f/2.5 G</li>
								<li>Sony FE 85mm f/1.8</li>
								<li>Fujifilm XF 23mm f/1.4 R</li>
								<li>Fujifilm XF 35mm f/1.4 R</li>
							</ul>
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
	title: "About Me",
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
