/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
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
        black: "#121213",

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
      fontSize: {
        '8xl': ['6.50rem', {
          lineHeight: '7.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
