import { StoryblokImage } from "@/components/StoryblokImage/StoryblokImage"

// Because we will always get a storyblok image here, like this:
// https://a.storyblok.com/f/313088/882x544/fbcf8b5617/song-lyrics-with-dates-as-titles.jpg
// We need to extract the width and height from the url otherwise it'll
// throw an error.

export const MarkdownImage = (props: any) => {
	return (
		<StoryblokImage
			{...props}
			width={768}
			height={0}
			quality={85}
			showCaption={true}
		/>
	)
}
