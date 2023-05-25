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
        14: "3.75rem",
      },
      boxShadow: {
        "md-strong":
          "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 1px 2px 4px -1px rgb(0 0 0 / 0.2)",
      },
      fontSize: {
        l: ["17px", "26px"],
      },
      paddingRight: {
        "pr-19": "4.5rem",
      },

      input: {
        autocomplete: "off",
      },
    },

    colors: {
      zinic: "#e4e4e7",
      gray: "#757575",
      "gray-300": "#5b5b5b",
      "morning-strong": "#ff4c4c",
      "afternoon-strong": "#edb500",
      "night-strong": "#2472ad",
    },
    fontFamily: {
      NanumGothic: ["Nanum Gothic"],
    },
  },
  plugins: [],
});
