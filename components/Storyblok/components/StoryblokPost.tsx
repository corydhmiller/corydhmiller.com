// app/components/StoryblokPost.jsx
import { StoryblokComponent, storyblokEditable } from "@storyblok/react"

const StoryblokPost = ({ blok }) => {
	console.log("StoryblokPost received blok:", blok);
	
	// Handle case where body might not exist
	if (!blok.body || !Array.isArray(blok.body)) {
		return (
			<main {...storyblokEditable(blok)}>
				<h1>{blok.title || "Post"}</h1>
				{blok.content && <div dangerouslySetInnerHTML={{ __html: blok.content }} />}
				<pre>Debug blok: {JSON.stringify(blok, null, 2)}</pre>
			</main>
		);
	}

	return (
		<main {...storyblokEditable(blok)}>
			{blok.body.map((nestedBlok) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</main>
	);
}

export default StoryblokPost
