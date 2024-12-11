/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			height: {
				"100vh": "100vh",
			},
			scale: {
				"-flip": "-100%",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
		colors: {
			transparent: "transparent",
			primary: "#5955f4",
			secondary: "#fb7649",
			black: "#0D0D0D",
			white: "#efefef",
			gray: {
				100: "#f4eff9",
				200: "#c9c0d9",
				400: "#535353",
				800: "#111111",
			},
		},
		fontFamily: {
			sans: [
				"HKGrotesk",
				"Helvetica Neue",
				"Helvetica",
				"Arial",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			serif: ["Juana", "Georgia", "Cambria", "Times New Roman", "serif"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}
