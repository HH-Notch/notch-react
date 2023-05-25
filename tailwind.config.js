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
    },

    colors: {
      zinic: "#e4e4e7",
      gray: "#757575",
      "morning-strong": "#ff4c4c",
      "afternoon-strong": "#edb500",
    },
    fontFamily: {
      NanumGothic: ["Nanum Gothic"],
    },
  },
  plugins: [],
});
