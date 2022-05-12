const composePlugins = require("next-compose-plugins")

module.exports = composePlugins([], {
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
})
