/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router (pages, layouts, etc.)
    "./components/**/*.{js,ts,jsx,tsx}", // tus componentes
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
