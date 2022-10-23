const colors = require('tailwindcss/colors') 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: {
          100:  "#e4e4e4",
          200: "#dfdfdf",
          300: "#dadada",
          400: "#d5d5d5",
          500: "#d0d0d0",
          600: "#cbcbcb",
          700: "#c6c6c6"
        },
        black: "#0d0d0d",
        blue: {
          100: "#67b0e8",
          200: "#62abe3",
          300: "#5da6de",
          400: "#58a1d9",
          500: "#539cd4",
          600: "#4e97cf",
          700: "#597eb0 ",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
