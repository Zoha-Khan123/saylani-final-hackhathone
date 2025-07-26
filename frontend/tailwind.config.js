/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': '#cacaca',
      'darkgray': '#919090',
      'purple': '#536bf3',
      'pink': '#f94982',
      'white':"#ffff",
      "black":"#000"
    },
    extend: {},
  },
  plugins: [],
}