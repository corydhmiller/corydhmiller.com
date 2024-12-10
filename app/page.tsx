import Heading from "@/components/Typography/Heading"
import { HoverGlow } from "@/components/UI/HoverGlow"
import Content from "@components/Content"
import Prose from "@components/Prose"
import Link from "@components/UI/Link"

const PageContent = () => {
	return (
		<div className="grid gap-4">
			<div className="prose-h1:m-0 prose-lg m-8 sm:m-24">
				<Prose>
					<Heading as="h1">
						Hi, I'm <span className="text-secondary">Cory</span>.
					</Heading>
					<p>
						I'm a web developer currently working at{" "}
						<Link href="https://kit.com" variant="primary" newTab>
							Kit
						</Link>
						.
					</p>
					<p>
						I write about{" "}
						<Link href="/blog" variant="primary">
							web development and other stuff
						</Link>
						, sharing my{" "}
						<Link href="/photography" variant="primary">
							photography
						</Link>
						, or working on making the web a better place.
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
