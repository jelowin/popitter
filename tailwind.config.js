const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: () => ({
      primary: colors.red["400"],
      secondary: colors.green["400"],
    }),
    extend: {
      colors: {
        primary: colors.red["400"],
        secondary: colors.green["400"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
