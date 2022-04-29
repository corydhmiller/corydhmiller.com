import Layout from "@components/Layout"
import Content from "@components/Content"
import { Heading } from "@components/Typography"
import estimateReadingTime from "@utils/EstimateRead"

const Article = ({ children, data }) => {
	const { meta } = data
	return (
		<Layout>
			<Content>
				<article>
					<Heading as="h1">{meta.title}</Heading>
					<div className="text-sm text-gray-400">
						Read time: {estimateReadingTime(data.wordCount)} minutes
					</div>
					{children}
				</article>
			</Content>
		</Layout>
	)
}

export default Article
