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
        'primaryColor': "#4A90E2 ", //skyblue
        'secondaryColor': '#50E3C2 ', //tourquise
        'lightColor1': '#F5A623 ',//orange
        'lightColor2': '#F7F9FC ',//light gray
        'dark1':'#333333 ', //dark gray
        'light3':'#7F8C8D ', //gray
        'dark2':'#E74C3C ' //red
        
      },
    },
  },
  plugins: [],
}

