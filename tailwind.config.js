/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        utility: "5px 0 5px -2px rgba(0,0,0,0.3), -5px 0 5px -2px rgba(0,0,0,0.3), 0 -5px 5px -2px rgba(0,0,0,0.3)", // Example shadow color and strength
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#9B3678",
          50: "#fdf6fb",
          100: "#fbecf7",
          200: "#f6d8ef",
          300: "#efb8df",
          400: "#e48ecb",
          500: "#d362b1",
          600: "#b64390",
          700: "#9b3678",
          800: "#7b2d5f",
          900: "#66294e",
          950: "#42102f",
        },
        secondary: {
          DEFAULT: "#804fb3",
          50: "#faf7fd",
          100: "#f2edfa",
          200: "#e8def6",
          300: "#d6c5ed",
          400: "#bd9fe1",
          500: "#a379d3",
          600: "#8c5cc1",
          700: "#804fb3",
          800: "#653f8a",
          900: "#52346f",
          950: "#371c4f",
        },
        Grey: {
          50: "#F8FAFC",
          100: "#EEF2F6",
          200: "#E3E8EF",
          300: "#CDD5DF",
          400: "#9AA4B2",
          500: "#697586",
          600: "#4B5565",
          700: "#364152",
          800: "#202939",
          900: "#121926",
          950: "#0D121C",
        },
      },
    },
  },
  plugins: [],
};
