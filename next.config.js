const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

	async redirects() {
		return [
			{
				source: "/blog",
				destination: "/",
				permanent: true,
			},
		]
	},
}

module.exports = withMDX(nextConfig)
