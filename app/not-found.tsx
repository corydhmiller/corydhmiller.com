import Content from "@components/Content"
import Prose from "@components/Prose"
import Heading from "@components/Typography/Heading"

export default function NotFound() {
	return (
		<>
			<Content>
				<Prose>
					<Heading as="h1">That doesn&apos;t exist.</Heading>
					<p>Sorry about that.</p>
				</Prose>
			</Content>
		</>
	)
}

//metadata
export const metadata = {
	title: "Sorry! Not found",
	description: "Couldn't find what you were looking for.",
}
