/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
    extend: {
      backgroundColor: {
        'common': 'pink'
      },

      gridTemplateColumns: {
        'autoFit': 'repeat(auto-fit, minmax(350px, 1fr))'

      }

    }


  },
  plugins: [],
} 