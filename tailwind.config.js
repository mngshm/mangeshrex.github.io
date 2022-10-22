const colors = require('tailwindcss/colors') 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#c6c6c6",
        black: "#0d9090",
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
