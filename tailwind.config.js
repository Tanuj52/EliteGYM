/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'premium-black': '#121212',
        'premium-red': '#FF0037',
      },
    },
  },
  plugins: [],
}