import { BackgroundText } from "@/components/BackgroundText"
import Heading from "@/components/Typography/Heading"
import Content from "@components/Content"
import Link from "@components/UI/Link"
import Prose from "@components/Prose"
import Image from "next/image"

export default function About() {
	return (
		<>
			<BackgroundText text="Me" />
			<Content>
				<Prose className="w-full max-w-7xl mx-auto sm:text-center my-8 sm:mt-24 mb-8 relative">
					<Heading as="h1">About Me</Heading>
				</Prose>
				<div className="flex sm:items-center sm:justify-center relative mb-24">
					<div className="transform relative block">
						<div className="after:content-[''] after:absolute after:left-0 after:h-3/5 after:bottom-1 after:dark:bg-primary after:bg-secondary after:rounded-t-full after:transition-all after:duration-300 after:ease-in-out after:-z-1 after:w-full"></div>
						<Image
							src="/images/cory-miller-profile-picture.png"
							alt="Cory Miller"
							width={384}
							height={384}
							className="w-48 sm:w-96 h-48 sm:h-96 z-1 relative"
						/>
					</div>
				</div>
				<Prose className="prose-lg mx-auto mb-24">
					<p>
						I was born in Washington, raised in California, and currently live
						in Vienna, Austria. I&apos;m a web developer, photographer,
						musician, and creative at heart.
					</p>

					<h2>What I Do</h2>
					<p>
						Currently, I work at{" "}
						<Link href="https://kit.com" variant="primary" newTab>
							Kit
						</Link>{" "}
						where I run the marketing site (note: it's pretty cool being in
						charge of a three-letter domain).
					</p>
					<p>
						I&apos;ve been making websites since I was about 13, initially
						dabbling in Microsoft Frontpage and Macromedia Dreamweaver and
						Flash. Completely self taught, I started a career in web development
						at age 30, a good reminder that it&apos;s never too late to start
						something new.
					</p>
					<p>
						I specialize in front-end code, with a focus on React and
						Next.js. I enjoy solving problems and creating enjoyable moments for
						people.
					</p>
          <p>
            Writing code isn't the sole focus of my creative life. I also have a collection of film and digital cameras and enjoy getting out into the world and making memories.
          </p>

					<h2>Get in Touch</h2>
					<p>
						While I&apos;m not big on social media, you can find me on{" "}
						<Link
							href="https://bsky.app/profile/corydhmiller.com"
							variant="primary"
							newTab
						>
							Bluesky
						</Link>{" "}
						or check out my{" "}
						<Link href="/blog" variant="primary">
							blog
						</Link>{" "}
						where I write about web development and other interests.
					</p>
				</Prose>
			</Content>
		</>
	)
}

export const metadata = {
	title: "About",
	description: "Learn more about Cory Miller, web developer and creative.",
	openGraph: {
		title: "About - Cory Miller",
		description: "Learn more about Cory Miller, web developer and creative.",
		url: "https://corydhmiller.com/about",
		siteName: "Cory Miller",
		locale: "en_US",
		type: "website",
	},
}
