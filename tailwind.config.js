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
        logo: "35rem",
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
      dropShadow: {
        welcome: [
          "0 1px 0 #a5a2ec",
          "0 1px 0 #e1d8e7",
          "0 1px 0 #b294da",
          "0 1px 0 #9a9bff",

          "1px 3px 1px rgba(0, 0, 0 ,0.29)",
          "0 0 1px rgba(0, 0, 0, 0.1)",
          "0 1px 0 rgba(0, 0, 0, 0)",
          "0 1px 0px rgba(0, 0, 0, 0.25)",
        ],
        // text2: ["-4px 3px 0 #3a50d9", "-14px 7px 0 #0a0e27"],
      },
      transform: {
        "translate-y-minus-0.2": "transform:translateY(-0.2em)",
        "translate-y-minus-0.33": "transform: translateY(-0.33em)",
      },
      fontWeight: {
        "lg-medium": 450,
      },
    },

    colors: {
      zinic: "#e4e4e7",
      gray: "#757575",
      welcome: "#b88fd6",
      "gray-300": "#5b5b5b",
      "morning-strong": "#ff4c4c",
      "afternoon-strong": "#edb500",
      "night-strong": "#2472ad",
      "morning-block": "#f9957f",
      "afternoon-block": "#54cdd8",
      "night-block": "#b68bd3",
      "bonus-block": "#a5a5a5",
    },
    fontFamily: {
      NanumGothic: ["Nanum Gothic"],
      Grandstander: ["Grandstander"],
      ghanachoco: ["ghanachoco"],
    },
  },
  plugins: [],
});
