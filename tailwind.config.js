/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const {nextui} = require('@nextui-org/theme');

export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: "DM Sans",
      },
      boxShadow: {
        button: '0px 8px 0px 0px white',
        press: '0px 3px 0px 0px white'
      },
      bgBack: {
        'redd': "#FFFFFF"
      }
    },
    screens: {
      'xs': '320px',
      'xm': '375px',
      'xp': '425px',
      ...defaultTheme.screens,
    },
  },
  plugins: [nextui()],
};
