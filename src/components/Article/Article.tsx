import Heading from "@components/Typography/Heading"
import Link from "@components/UI/Link"
import Prose from "@components/Prose"

const Article = ({
	children,
	data,
}: {
	children: JSX.Element | string
	data: {
		title: string
		publishDate: string
		category: string
		tags?: string[]
		wordCount?: number
	}
}) => {
	// Format the date like October 20, 2020
	const publishDate = new Date(data.publishDate).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})
	const tagsArray = data.tags.toString().split(",")
	return (
		<>
			<Prose className="col-span-3 w-full max-w-7xl mx-auto sm:text-center">
				<Heading as="h1">{data.title}</Heading>
			</Prose>
			<article className="col-start-2">
				<Prose className="prose-lg my-6 text-center">
					{publishDate && (
						<div>
							<span className="opacity-60 prose-lg">
								{data.category[0].toUpperCase() + data.category.slice(1)}
							</span>
							{" • "}
							<span className="opacity-60 prose-lg">{publishDate}</span>
						</div>
					)}

					<Link href="/" className="prose-lg" variant="secondary">
						&larr; Back
					</Link>
				</Prose>

				<div className="h-1 bg-gray-600 my-12"></div>
				<Prose>{children}</Prose>
				<div className="h-px bg-gray-600 my-12 w-1/2"></div>
				{tagsArray && (
					<Prose className="grid prose-lg my-6">
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
