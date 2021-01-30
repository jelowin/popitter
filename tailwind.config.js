const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: () => ({
      ...colors,
      primary: colors.red["400"],
      secondary: colors.green["400"],
    }),
    extend: {
      colors: {
        ...colors,
        primary: colors.red["400"],
        secondary: colors.green["400"],
      },
      fontFamily: {
        base: ["Quicksand, sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".backdrop-filter": {
          "backdrop-filter": "blur(4px)",
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
