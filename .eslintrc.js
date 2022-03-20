module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["next/core-web-vitals", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			modules: true,
		},
		ecmaVersion: "6",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": "off",
		semi: ["error", "never"],
	},
}
