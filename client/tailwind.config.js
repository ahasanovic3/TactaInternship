/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: "dodgerblue",
      },
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false,
  },
}