import Heading from "@/components/Typography/Heading"
import { HoverGlow } from "@/components/UI/HoverGlow"
import Prose from "@components/Prose"
import Link from "@components/UI/Link"

const PageContent = () => {
	return (
		<div className="grid gap-4">
			<div className="prose-h1:m-0 prose-lg m-8 sm:m-24">
				<Prose>
					<Heading as="h1">
						Hi, I&apos;m <span className="text-secondary">Cory</span>.
					</Heading>
					<p>
						I&apos;m a web developer currently working at{" "}
						<Link href="https://kit.com" variant="primary" newTab>
							Kit
						</Link>
						.
					</p>
					<p>
						I write about{" "}
						<Link href="/blog" variant="primary">
							web development and other stuff
						</Link>{" "}
						that comes to mind. I'm a{" "}
						<Link href="/photography" variant="primary" className="w-16">
							photographer
						</Link>
						, a musician, and a creative at heart.
					</p>
					<p>
						I'm not a fan of social media, but I'm on{" "}
						<Link
							href="https://bsky.app/profile/corydhmiller.com"
							variant="primary"
							newTab
						>
							Bluesky
						</Link>{" "}
						if you want to say hi.
					</p>
				</Prose>
			</div>
		</div>
	)
}

export default function Home() {
	return (
		<HoverGlow>
			<PageContent />
		</HoverGlow>
	)
}
