/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        custom: "0 1px 8px 0 rgba(0, 0, 0, 0.08)", // "shadow-custom"
      },
    },
  },
  plugins: [],
};
