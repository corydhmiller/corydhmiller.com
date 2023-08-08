/**
 *
 * estimateReadingTime() takes in a number of words and returns an estimate of how long it would take to read the text in minutes.
 * It assumes that the average person reads 130 words per minute and that the average person can read 60% of the words on a page.
 *
 * @param wordCount number
 * @returns number
 */
export const estimateReadingTime = (wordCount: number): number =>
	Math.floor((wordCount / 130) * 0.6)
