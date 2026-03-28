/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        primaryDark: "#0284C7",
        lightBlue: "#E0F0FF",
        ice: "#F0F8FF",
      },
    },
  },
  plugins: [],
};
