import { formatDate } from "@/src/utils/dates.utils"
import Prose from "@components/Prose"
import Heading from "@components/Typography/Heading"
import Link from "@components/UI/Link"
import Content from "../Content"
import Image from "next/image"
import FeatherIcon from "feather-icons-react"
import { updateStoryblokImageDimensions } from "@/app/lib/storyblok-image"

const Article = ({
	children,
	data,
}: {
	children: React.ReactNode | string
	data: {
		title: string
		publishDate: string
		category: string
		tags?: string[]
		wordCount?: number
		image?: {
			filename: string
			alt: string
			description: string
		}
	}
}) => {
	const publishDate = formatDate(data.publishDate)
	const tagsArray = data.tags?.toString().split(",")

	return (
		<>
			{data.image && (
				<div className="max-w-7xl mx-auto sm:-mb-64">
					<Image
						src={updateStoryblokImageDimensions(data.image.filename, {
							width: 1200,
							height: 600,
						})}
						alt={data.image.alt}
						width={1200}
						height={600}
						quality={60}
						priority
						className="w-full h-auto rounded-lg"
					/>
				</div>
			)}
			<Content>
				<Prose className="mt-12 sm:mt-24 max-w-7xl sm:dark:bg-gray-800/80 relative px-4 -mx-4 sm:bg-gray-100/80 rounded">
					<Heading as="h1">{data.title}</Heading>
				</Prose>
				<article>
					<Prose className="prose-lg my-6 mb-12 relative">
						{publishDate && (
							<div className="flex items-center gap-2">
								<span className="prose-lg">
									{data.category[0].toUpperCase() + data.category.slice(1)}
								</span>
								<span className="opacity-50 prose-lg">•</span>
								<span className="prose-lg">{publishDate}</span>
							</div>
						)}

						<Link href="/blog" className="prose-lg" variant="primary">
							&larr; Back
						</Link>
					</Prose>
					{data?.image?.alt && (
						<p className="italic flex items-center gap-2 text-sm mb-4">
							<FeatherIcon icon="camera" size={16} /> Pictured above:{" "}
							{data.image.alt}
						</p>
					)}

					<Prose className="">{children}</Prose>
					{tagsArray && (
						<Prose className="grid prose-lg mt-12">
							<div>
								<span className="opacity-60 prose-lg">
									tags:{" "}
									{tagsArray
										.toString()
										.split(",")
										.map((tag, index) => (
											<span key={tag} className="opacity-60 prose-lg">
												{tag.trim()}
												{index < tagsArray.length - 1 ? ", " : ""}
											</span>
										))}
								</span>
							</div>
						</Prose>
					)}
				</article>
			</Content>
		</>
	)
}

export default Article
