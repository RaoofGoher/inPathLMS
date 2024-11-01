/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primaryColor': "#022763",
        'secondaryColor': '#D2B486',
        'darkColor': '#4B4B4D',
        'lightColor': '#0CADA8',
        
      },
    },
  },
  plugins: [],
}

