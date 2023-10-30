import Prose from "@components/Prose"

const Article = ({ children, data }) => {
	return (
		<article>
			<Prose>{children}</Prose>
		</article>
	)
}

export default Article
