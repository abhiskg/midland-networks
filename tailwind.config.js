/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#66C4F2",
          200: "#367CF3",
        },
        secondary: {
          100: "#F2F3F5",
          200: "#F2F3F4",
          300: "#2E3E8F",
          400: "#191D65",
        },
        primaryText: {
          100: "#888f97",
          200: "#4F4F4F",
        },
        secondaryText: {
          100: "#528bff",
          200: "#ea3357",
          300: "#ACACAC",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
