/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#042C54",
        secondary: "#031B34",
        oragne: "#FF4820",
        mxCol1: "#AE67FA",
        mxCol2: "#F49867",
        ColorContent1: "#81AFDD",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-seri"],
      },
      width: {
        98: "500px",
        100: "666px",
        150: "1090px",
      },
      height: {
        100: "666px",
        150: "1090px",
      },
    },
  },
  plugins: [],
};
