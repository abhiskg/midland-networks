/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#66C4F2",
        },
        secondary: {
          100: "#F2F3F5",
          200: "#F2F3F4",
          300: "#2E3E8F",
          400: "#191D65",
        },
      },
    },
  },
  plugins: [],
};
