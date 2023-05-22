/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        88: "22rem",
      },
      width: {
        88: "22rem",
      },
    },
  },
  plugins: [],
});
