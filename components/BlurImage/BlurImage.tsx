"use client"

import React, { useState } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/src/utils/cn.utils"

interface BlurImageProps extends Omit<ImageProps, "src"> {
	src: string
	lowResSrc?: string
}

export function BlurImage({ src, alt, className, ...props }: BlurImageProps) {
	const [isLoaded, setIsLoaded] = useState(false)
	// Replace any dimensions after /m/ with 50x0
	const lowResSrc = src.replace(/\/m\/\d+x\d+/, "/m/50x0")

	return (
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
					quality={1}
					priority
					{...props}
				/>
			)}
			<Image
				src={src}
				alt={alt}
				className={cn(
					"absolute inset-0 transition-opacity duration-500",
					isLoaded ? "opacity-100" : "opacity-0",
					className
				)}
				quality={90}
				onLoadingComplete={() => setIsLoaded(true)}
				{...props}
			/>
		</div>
	)
}
