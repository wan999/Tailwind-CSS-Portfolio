/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      gray: colors.gray,
      'teal': '#85BEFF',
      'slate-light': '#272A32',
      'slate-dark': '#212129' ,
      'slate-darkest': '#15151BFF',
      'dm-gray': '#1D1D21',
      'blue-light': '#3A7DFF',
      'blue-mid': '#2B37A5',
      'blue-dark': '#212C8E',
      'blue-thumbnail' : '#141357',
      'gray-light': '#969696',
      'gray-mid': '#474646',
      'gray-dark': '#353535',
      'black': 'black',
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

