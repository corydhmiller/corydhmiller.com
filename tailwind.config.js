/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			height: {
				"100vh": "100vh",
			},
			scale: {
				"-flip": "-100%",
			},
		},
		colors: {
			transparent: "transparent",
			black: "var(--black)",
			gray: {
				100: "var(--gray-100)",
				200: "var(--gray-200)",
				300: "var(--gray-300)",
				400: "var(--gray-400)",
				600: "var(--gray-600)",
				800: "var(--gray-800)",
			},
			orange: {
				100: "var(--orange-100)",
				400: "var(--orange-400)",
				600: "var(--orange-600)",
			},
			blue: {
				100: "var(--blue-100)",
				400: "var(--blue-400)",
				600: "var(--blue-600)",
				800: "var(--blue-800)",
			},
			purple: {
				100: "var(--purple-100)",
				400: "var(--purple-400)",
				600: "var(--purple-600)",
			},
			red: {
				100: "var(--red-100)",
				400: "var(--red-400)",
				600: "var(--red-600)",
			},
		},
		fontFamily: {
			sans: [
				"HKGrotesk",
				'"Helvetica Neue"',
				"Helvetica",
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ["Juana", "Georgia", "Cambria", '"Times New Roman"', "serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
