"use client"

import React, { useState } from "react"
import Image, { ImageProps } from "next/image"
import {
	updateStoryblokImageDimensions,
	updateStoryblokQuality,
} from "@/app/lib/storyblok-image"
import { cn } from "@/src/utils/cn.utils"

interface StoryblokImageProps extends Omit<ImageProps, "src"> {
	src: string
	quality?: number
	dimensions?: { width: number; height: number }
	blur?: boolean
	lowResSrc?: string
	showCaption?: boolean
	wrapInFigure?: boolean
}

export function StoryblokImage({
	src,
	alt,
	className,
	quality = 85,
	dimensions,
	blur = false,
	showCaption = false,
	wrapInFigure = false,
	priority,
	...props
}: StoryblokImageProps) {
	const [isLoaded, setIsLoaded] = useState(false)
	
	const isLocalImage = !src.startsWith("http")
	const isStoryblokImage = src.includes("storyblok.com")
	
	// Process Storyblok image URL
	let processedSrc = src
	let imageWidth = props.width
	let imageHeight = props.height
	
	if (!isLocalImage && isStoryblokImage) {
		// Extract dimensions from Storyblok URL if not provided
		if (!imageWidth || !imageHeight) {
			const dimensionsMatch = src.match(/\/(\d+)x(\d+)\//)
			if (dimensionsMatch) {
				imageWidth = parseInt(dimensionsMatch[1])
				imageHeight = parseInt(dimensionsMatch[2])
			}
		}
		
		// Apply dimensions using the utility function
		if (dimensions) {
			// Apply custom dimensions
			processedSrc = updateStoryblokImageDimensions(src, dimensions)
		} else if (imageWidth) {
			// Use the specified width with height 0 (maintains aspect ratio)
			processedSrc = updateStoryblokImageDimensions(src, { width: Number(imageWidth), height: 0 })
		} else {
			// Just add /m/ to enable other filters without changing dimensions
			processedSrc = src + `/m/`
		}
		
		// Apply quality filter via Storyblok API
		processedSrc = updateStoryblokQuality(processedSrc, quality)
	}
	
	// Generate low-res version for blur effect
	const lowResSrc = blur && isStoryblokImage 
		? processedSrc.replace(/\/m\/\d+x\d+/, "/m/50x0")
		: undefined

	const imageElement = blur ? (
		<div className="relative w-full h-full">
			{lowResSrc && (
				<Image
					src={lowResSrc}
					alt={alt}
					className={cn(
						"absolute inset-0 blur-3xl duration-700 transition-opacity",
						className,
						isLoaded ? "opacity-0" : "opacity-100"
					)}
					width={imageWidth}
					height={imageHeight}
					unoptimized
					{...props}
				/>
			)}
			<Image
				src={processedSrc}
				alt={alt}
				className={cn(
					"absolute inset-0 transition-opacity duration-500",
					isLoaded ? "opacity-100" : "opacity-0",
					className
				)}
				priority={priority}
				onLoadingComplete={() => setIsLoaded(true)}
				width={imageWidth}
				height={imageHeight}
				unoptimized
				{...props}
			/>
		</div>
	) : (
		<Image
			src={processedSrc}
			alt={alt}
			className={className}
			width={imageWidth}
			height={imageHeight}
			priority={priority}
			unoptimized
			{...props}
		/>
	)

	if (wrapInFigure) {
		return (
			<figure className="flex flex-col" role="figure">
				{imageElement}
				{showCaption && alt && <figcaption>{alt}</figcaption>}
			</figure>
		)
	}

	return imageElement
}