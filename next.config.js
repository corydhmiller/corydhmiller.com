const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Add images.unsplash.com to the image domains
	images: {
		domains: ["images.unsplash.com", "a.storyblok.com"],
	},
}

module.exports = withMDX(nextConfig)
