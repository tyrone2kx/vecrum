/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px'
    // },
    extend: {
      screens: {
        'base': { 'raw': '(min-width: 768px)' },
        // => @media (min-height: 800px) { ... }
      },
      fontFamily: {
        'sans': ['Inter', 'Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#7F56D9",
        lightPurple: "#D6BBFB",
        purpleText: "#53389E",
        lightPurpleText: "#7F56D9",
        green: "#027A48",
        lightGreen: "#ECFDF3",
        greyText: "#667085",
        blackText: "#101828",
        pageBg: "#F9FAFB",
        spacerBg: "#EAECF0",
        secText: "#344054",
        checkboxBg: "#F9F5FF",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
  ],
}
