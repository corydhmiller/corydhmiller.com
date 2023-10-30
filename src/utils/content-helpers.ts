export const estimateReadingTime = (wordCount) =>
	Math.floor((wordCount / 130) * 0.6)

export const countWords = (content) => {
	const words = content.split(" ")
	return words.length
}
	