import Content from "@components/Content"

interface HomeProps {
	posts: {}
}

export default function BlogPost({ children }) {
	return (
		<>
			<Content>{children}</Content>
		</>
	)
}
