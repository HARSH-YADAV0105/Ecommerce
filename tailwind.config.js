/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        integral: ["Integral CF", "sans-serif"],
      },
    },
  },
};
