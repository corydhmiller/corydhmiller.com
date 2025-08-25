export const updateStoryblokImageDimensions = (
	image: string,
	dimensions: { width: number; height: number }
) => {
	const { width, height } = dimensions

	return image + `/m/${width}x${height}`
}
