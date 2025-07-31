import { BackgroundText } from "@/components/BackgroundText"
import Content from "@/components/Content"
import Heading from "@/components/Typography/Heading"
import { HoverGlow } from "@/components/UI/HoverGlow"
import Prose from "@components/Prose"
import Link from "@components/UI/Link"

const PageContent = () => {
	return (
		<Content>
			<div className="mt-24 grid gap-4">
				<div className="prose-h1:m-0 prose-lg">
					<Prose>
						<Heading as="h1">
							Hi, I&apos;m <span className="text-secondary">Cory</span>.
						</Heading>
						<p>
							I&apos;m a web engineer currently working at{" "}
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
							that comes to mind. I&apos;m a{" "}
							<Link href="/photography" variant="primary" className="w-16">
								photographer
							</Link>
							, a musician, and a creative at heart.
						</p>
					</Prose>
				</div>
			</div>
		</Content>
	)
}

export default function Home() {
	return (
		<>
			<BackgroundText text="Hello." />
			<HoverGlow>
				<PageContent />
			</HoverGlow>
		</>
	)
}
