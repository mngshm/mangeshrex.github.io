const colors = require('tailwindcss/colors') 

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '9xl': '100.052rem',
    },
    extend: {
      colors: {
        white: {
          100: "#cacad9",
          200: "#c5c5d4",
          300: "#c0c0cf",
          400: "#b9b9c8",
          500: "#b2b2c1",
          600: "#ababba",
          700: "#a4a4b3"
        },
        black: "#0d0d0d",
        blue: {
          100: "#b0cce3",
          200: "#a9c5dc",
          300: "#a2bed5",
          400: "#9bb7ce",
          500: "#94b0c7",
          600: "#8da9c0",
          700: "#86a2b9",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
