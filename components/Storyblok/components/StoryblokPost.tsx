// app/components/Page.jsx
import { StoryblokComponent, storyblokEditable } from "@storyblok/react"

const StoryblokPost = ({ blok }) => (
	<main {...storyblokEditable(blok)}>
		{blok.body.map((nestedBlok) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
)

export default StoryblokPost
