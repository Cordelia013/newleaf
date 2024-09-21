/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
  'Desirable-Sans': ['Desirable-sans', 'sans-serif'],
  'Desirable-Brust': ['Desirable-Brust', 'sans-serif'],
},
    },
  },

   plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

