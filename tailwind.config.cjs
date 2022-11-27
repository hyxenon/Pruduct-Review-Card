/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        creamy: "#F2EBE3",
      },
      fontFamily:{
        montserrat: "'Montserrat', sans-serif"
      }
    },

    screens: {
      'sm': '375px',
      'md': '1440px',
    }
  },
  plugins: [],
}
