/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: "DM Sans",
      },
    },
    screens: {
      'xs': '320px',
      'xm': '375px',
      'xp': '425px',
      ...defaultTheme.screens,
    },
    // screens: {
    //   'xs': "320px",
    //   // => @media (min-width: 320px) { ... }
    //   'ml': "375px",
    //   // => @media (min-width: 375px) { ... }
    //   'mx': "425px",
    //   // => @media (min-width: 425px) { ... }
    //   'md': "640px",
    //   // => @media (min-width: 640px) { ... }
    //   'lg': "1024px",
    //   // => @media (min-width: 1024px) { ... }
    //   'xl': "1280px",
    //   // => @media (min-width: 1280px) { ... }
    //   '2xl': "1536px"
    //   // => @media (min-width: 1536px) { ... }
    // },
  },
  plugins: [],
};
