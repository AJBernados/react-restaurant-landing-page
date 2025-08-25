module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlack: "#000000",
        brandGreen: "#FFC601",
        brandGrey: "#eee",
        brandWhite: "#FFFFFF",
        themeYellow: "#FFC601",
        themeBlack: "#000000",
        themeWhite: "#FFFFFF"
      },
      boxShadow: {
        brand: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.1)"
      }
    }
  },
  plugins: []
}
