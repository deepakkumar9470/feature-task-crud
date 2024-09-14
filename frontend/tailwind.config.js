/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainbg :'#0d1117',
        secBg : '#010409'
      }
    },
  },
  plugins: [],
}

