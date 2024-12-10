import Heading from "@components/Typography/Heading"
import Link from "@components/UI/Link"
import Prose from "@components/Prose"
import { formatDate } from "@/src/utils/dates.utils"
import { BackgroundText } from "../BackgroundText"

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
	}
}) => {
	const publishDate = formatDate(data.publishDate)
	const tagsArray = data.tags?.toString().split(",")
	return (
		<>
			<BackgroundText text={data.title} />
			<Prose className="w-full my-8 sm:my-24 max-w-7xl mx-auto sm:text-center">
				<Heading as="h1">{data.title}</Heading>
			</Prose>
			<article className="mx-auto mb-24">
				<Prose className="prose-lg my-6 sm:text-center sm:mx-auto">
					{publishDate && (
						<div>
							<span className="opacity-60 prose-lg">
								{data.category[0].toUpperCase() + data.category.slice(1)}
							</span>
							{" • "}
							<span className="opacity-60 prose-lg">{publishDate}</span>
						</div>
					)}

					<Link href="/blog" className="prose-lg" variant="primary">
						&larr; Back
					</Link>
				</Prose>

				<div className="h-1 bg-gray-600 mt-4 sm:my-12"></div>
				<Prose className="sm:mx-auto">{children}</Prose>
				{tagsArray && (
					<Prose className="grid prose-lg my-6 sm:mx-auto">
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
		</>
	)
}

export default Article
