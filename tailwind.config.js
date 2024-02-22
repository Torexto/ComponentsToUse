/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: "#3778b4",
        darkGray: "#83899a",
        yellow: "#f3c426",
        gray: "#b2b6bb",
        black: "#171c27",
      },
    },
  },
  plugins: [],
};
