module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				"100vh": "100vh",
			},
		},
		colors: {
			transparent: "transparent",
			black: "#121319",
			gray: { 100: "#FAFAFC", 200: "#F2F2F4", 300: "#FAFAFC", 400: "#9090A7", 600: "#28293D", 800: "#1C1C27" },
			orange: { 100: "#FCCC75", 400: "#FDAC41", 600: "#FF8802" },
			blue: { 100: "#6898FF", 400: "#3D7BFA", 600: "#3668D4", 800: "#28293D" },
			purple: { 100: "#DEA5E8", 400: "#AC5CD9", 600: "#6500CD" },
			red: { 100: "#FF807F", 400: "#FF5C5C", 600: "#FF3B3B" },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
