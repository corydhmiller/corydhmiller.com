"use client"

import {
	updateStoryblokImageDimensions,
	updateStoryblokQuality,
} from "@/app/lib/storyblok-image"
import Image, { ImageProps } from "next/image"

interface StoryblokImageProps extends Omit<ImageProps, "src"> {
	src: string
	quality?: number
	dimensions?: { width: number; height: number }
	showCaption?: boolean
	sizes?: string
}

const imageLoader = ({
	src,
	width,
	quality,
}: {
	src: string
	width: number
	quality: number
}) => {
	return updateStoryblokQuality(
		updateStoryblokImageDimensions(src, { width, height: 0 }),
		quality
	)
}

export function StoryblokImage({
	src,
	alt,
	className,
	quality = 85,
	dimensions,
	showCaption = false,
	priority,
	sizes,
	...props
}: StoryblokImageProps) {
	let imageWidth = props.width
	let imageHeight = props.height

	return (
		<figure role="figure">
			<Image
				loader={imageLoader}
				src={src}
				alt={alt}
				className={className}
				width={imageWidth}
				height={imageHeight}
				quality={quality}
				sizes={sizes || "100vw"}
				{...props}
			/>
			{showCaption && alt && <figcaption>{alt}</figcaption>}
		</figure>
	)
}
