import Content from "@components/Content"
import { Heading } from "@components/Typography"

interface HomeProps {
	posts: {}
}

export default function Home({ posts }: HomeProps) {
	return (
		<>
			<Content>
				<Heading as="h1">Rebuilding this. See you soon.</Heading>
			</Content>
		</>
	)
}

//metadata
export const metadata = {
	title: "Home",
	description: "Home page",
}