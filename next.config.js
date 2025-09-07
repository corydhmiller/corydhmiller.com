const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Add images.unsplash.com to the image domains
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
			{ protocol: "https", hostname: "a.storyblok.com", pathname: "/**" },
		],
		qualities: [1, 60, 85, 90],
		deviceSizes: [420, 768, 1024, 1200, 1440],
	},
}

module.exports = withMDX(nextConfig)
