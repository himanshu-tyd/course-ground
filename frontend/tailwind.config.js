/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: " #DDF247 ",
        dark: "#101010",
        dusty: "#1C1C1C",
        gray: "#6F6F6F",
      },

      fontFamily: {
        "clash-regular": ["ClashDisplay-Regular", "sans-sarif"],
        "clash-medium": ["ClashDisplay-Medium", "sans-sarif"],
        "clash-semibold": ["ClashDisplay-Semibold", "sans-sarif"],
        "clash-bold": ["ClashDisplay-Bold", "sans-sarif"],
        "clash-light": ["ClashDisplay-Light", "sans-sarif"],
      },
    },
  },
  plugins: [],
};
