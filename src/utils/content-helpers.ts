export const estimateReadingTime = (wordCount) =>
	Math.floor((wordCount / 130) * 0.6)

export const getWordCount = (content) => {
	const words = content.split(" ")
	return words.length
}

export const sanitizeUrlSegment = (urlSegment: string) => {
	return (
		urlSegment
			// convert to lowercase so Blog becomes blog
			.toLowerCase()
			// replace . with "" so that the url is valid,
			// so next.js becomes nextjs
			.replace(/\./g, "")
			// replace all non-alphanumeric characters with -
			.replace(/[^a-zA-Z0-9]/g, "-")
	)
}
