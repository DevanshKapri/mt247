/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        dark: "#100f17",
        primary: "#1A74E2",
        secondary: "#CFE8EF",
        accent: "#75E6DA",
        whitegray: "#CBD2D0",
      },
      height: {
        100: "35rem",
      },
      borderRadius: {
        large: "2rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
