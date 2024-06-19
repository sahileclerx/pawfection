/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./assets/js/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark : "#333333",
        primary : "#EFBD68",
        light : "#F8F7F5",
      },
      fontFamily: {
        'nunito' : ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
}

