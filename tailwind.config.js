/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue,ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBgColor: "#eee",
        secondaryBgColor: "#0a0e27",
        navTextColor: "#262C55",
        "c-2": "#fb9129",
      },
      fontFamily: {
        hero: ["Millik", "sans-serif"],
      },
      screens: {
        desktop: "880px",
      },
    },
  },
  plugins: [],
};
