/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gilroy-bold": ["Gilroy Bold"],
        gilroy: ["Gilroy"],
      },
      colors: {
        primary: {
          DEFAULT: "#353535",
          light: "#8594AB",
        },
        secondary: {
          DEFAULT: "#6A4DFF",
          light: "#bbaffb",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
