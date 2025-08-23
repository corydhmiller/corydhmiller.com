import { formatDate } from "@/src/utils/dates.utils"
import Prose from "@components/Prose"
import Heading from "@components/Typography/Heading"
import Link from "@components/UI/Link"
import Content from "../Content"

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
			<Content>
				<Prose className="w-full mt-24 mb-8 max-w-7xl">
					<Heading as="h1">{data.title}</Heading>
				</Prose>
				<article>
					<Prose className="prose-lg my-6 mb-24">
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
