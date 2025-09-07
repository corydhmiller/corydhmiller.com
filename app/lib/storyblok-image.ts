export const updateStoryblokImageDimensions = (
	image: string,
	dimensions: { width: number; height: number }
) => {
	const { width, height } = dimensions

	return image + `/m/${width}x${height}`
}

export const updateStoryblokQuality = (image: string, quality: number) => {
	// Add filters:quality as part of the URL path
	return image + `/filters:quality(${quality})`
}