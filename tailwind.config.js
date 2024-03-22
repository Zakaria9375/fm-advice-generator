/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      neon: "#53FFAA",
      cyan: "#CEE3E9",
      grey: "#4F5D74",
      blue: "#313A48",
      dark: "#202733",
    },
    screens: {
      lmd: { max: "560px" },
      md: "560px",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        "main": "30px 50px 80px 0px rgba(0, 0, 0, 0.10)",
        "btn" : "0 0 40px 0 #53FFAA"
      },
    },
  },
  plugins: [],
};

