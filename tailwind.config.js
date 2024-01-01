/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Nunito': ['Nunito'],
        'Poppins': ['Poppins']
      },
      colors:{
        'btn': '#FF5A3C'
      },
    },
  },
  plugins: [],
}