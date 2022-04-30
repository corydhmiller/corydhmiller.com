import { MDXProvider } from "@mdx-js/react"
import components from "@components/MDXComponents"

import Layout from "@components/Layout"
import Content from "@components/Content"
import { Heading } from "@components/Typography"
import estimateReadingTime from "@utils/EstimateRead"

const Article = ({ children, data }) => {
	const { meta } = data
	return (
		<MDXProvider components={components}>
			<Layout>
				<Content>
					<article>
						<Heading as="h1">{meta.title}</Heading>
						<div className="mb-8 text-sm text-gray-400">
							Read time: {estimateReadingTime(data.wordCount)} minutes
						</div>
						<div className="text-gray-200">{children}</div>
					</article>
				</Content>
			</Layout>
		</MDXProvider>
	)
}

export default Article
