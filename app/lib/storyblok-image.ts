export const updateStoryblokImageDimensions = (
	image: string,
	dimensions: { width: number; height: number }
) => {
	const { width, height } = dimensions

	return image + `/m/${width}x${height}`
}

export const updateStoryblokQuality = (image: string, quality: number) => {
	const initialUrl = new URL(image)
	// Add /filters:quality(32) to the url
	// Note this is not filters=, but filters:
	return `${initialUrl.origin}${initialUrl.pathname}/filters:quality(${quality})${initialUrl.search}${initialUrl.hash}`
}