import Image from "next/image"

// Because we will always get a storyblok image here, like this:
// https://a.storyblok.com/f/313088/882x544/fbcf8b5617/song-lyrics-with-dates-as-titles.jpg
// We need to extract the width and height from the url otherwise it'll
// throw an error.

export const MarkdownImage = (props) => {
	// Copy props into new object since it's locked
	const newProps = { ...props }

	const isLocalImage = !props.src.startsWith("http")

	// Extract dimensions from Storyblok URL if it's not a local image
	if (!isLocalImage && props.src.includes("storyblok.com")) {
		const dimensionsMatch = props.src.match(/\/(\d+)x(\d+)\//)
		if (dimensionsMatch) {
			newProps.width = parseInt(dimensionsMatch[1])
			newProps.height = parseInt(dimensionsMatch[2])
		}
	}

	return (
		<figure className="flex flex-col" role="figure">
			<Image {...newProps} />
			<figcaption>
				{newProps.alt}
			</figcaption>
		</figure>
	)
}
