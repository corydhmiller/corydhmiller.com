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

	compiler: {
		styledComponents: true,
	},
}

module.exports = withMDX(nextConfig)
