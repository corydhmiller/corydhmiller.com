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
	},

	images: {
		qualities: [1, 60, 85, 90],
	},
}

module.exports = withMDX(nextConfig)
