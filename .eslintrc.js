module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["next/core-web-vitals", "plugin:react/recommended"],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			modules: true,
		},
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"wpcalypso/import-docblock": 0,
		"wpcalypso/jsx-classname-namespace": 0,
		"linebreak-style": 0,
		"no-console": 0,
		"max-len": 0,
		"import/no-unresolved": 0,
		"valid-jsdoc": 0,
		"no-useless-escape": 0,
		camelcase: 0,
		"react/no-danger": 0,
		"react/jsx-no-undef": [
			2,
			{
				allowGlobals: true,
			},
		],
	},
}
