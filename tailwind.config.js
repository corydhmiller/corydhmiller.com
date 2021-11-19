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
      black: {
        900: "#020E12",
        800: "#041D26",
      },
      gray: { 100: "#EEECE7", 400: "#77848C", 600: "#373446" },
      blue: { 500: "#435A67" },
      purple: { 200: "#C383AF", 400: "#683257" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
