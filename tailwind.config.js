/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: 'DM Sans'
      }
    },
    // screens: {
    //   'ms': '320px',
    //   'mm': '375px',
    //   'ml': '425px',
    //   'md': '725px'
    // }
  },
  plugins: [],
}