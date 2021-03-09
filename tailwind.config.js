const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    backgroundColor: () => ({
      ...colors,
      primary: colors.red['400'],
      secondary: colors.green['400']
    }),
    extend: {
      boxShadow: {
        sm:
          '0px 2px 4px rgba(88, 53, 94, 0.25), 0px 2px 10px rgba(88, 53, 94, 0.25)'
      },
      colors: {
        ...colors,
        primary: colors.red['400'],
        secondary: colors.green['400'],
        gray: {
          default: '#58355E'
        }
      },
      fontFamily: {
        title: ['Lobster, cursive'],
        base: ['Montserrat, sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.backdrop-filter': {
          'backdrop-filter': 'blur(4px)'
        }
      }

      addUtilities(newUtilities)
    })
  ]
}
