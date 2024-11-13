import BlurImage from "@/components/BlurImage"
import Content from "@components/Content"
import Prose from "@components/Prose"
import Link from "@components/UI/Link"
import Image from "next/image"

export default function Home() {
	return (
		<div>
			<div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
				<BlurImage
					src="https://a.storyblok.com/f/313088/3024x2005/69375f4961/walking-bicycle-shadow.jpg"
					alt=""
					fill
					className="object-cover from"
				/>
			</div>
			<Content>
				<div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 items-center">
					<div className="sm:col-span-2 prose-h1:m-0 prose-lg">
						<Prose className="text-5xl font-serif font-bold grid gap-12">
							<div>
								<Link href="/blog">Blog</Link>
							</div>
							<div>
								<Link href="/photography">Photography</Link>
							</div>
							<div>
								<Link href="/about">About</Link>
							</div>
						</Prose>
					</div>
				</div>
			</Content>
		</div>
	)
}
