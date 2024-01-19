/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'blue-light': '#3A7DFF',
      'blue-mid': '#2B37A5',
      'blue-dark': '#212C8E',
      'blue-thumbnail' : '#141357',
      'gray-light': '#969696',
      'gray-mid': '#474646',
      'gray-dark': '#353535',
      'black': '#0000000',
      "white": 'white',
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [],
}

