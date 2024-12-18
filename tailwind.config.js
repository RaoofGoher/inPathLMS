/** @type {import('tailwindcss').Config} */
const plugin = require('tailwind-scrollbar');
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
        'lightColor1': '#F5A623  ',//orange
        'lightColor2': '#F7F9FC',//light gray
        'dark1':'#333333 ', //dark gray
        'light3':'#7F8C8D ', //gray
        'dark2':'#E74C3C ', //red
        //new colors
        "blueColor":"#00438D",
        "lightBlue":"#E5F2FF",
        "grayColor":"#96989A",
        
      },
      animation: {
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    plugin({ nocompatible: true }), // Enable the plugin
    
    function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* Hide scrollbar for WebKit-based browsers */
        '-webkit-overflow-scrolling': 'touch',
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none',  /* Firefox */
      },
      '.scrollbar-hide::-webkit-scrollbar': {
        display: 'none', /* Safari and Chrome */
      },
    });
  },],
}

// blue : "#00438D" 
// ligthBlue:"#E5F2FF "
// gray:"#96989A"