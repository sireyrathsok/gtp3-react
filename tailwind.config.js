/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#052D56",
        secondary: "#031B34",
        oragne: "#FF4820",
        mxCol1: "#FA67C2",
        mxCol2: "#F49867",
        ColorContent1: "#81AFDD",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-seri"],
      },
    },
  },
  plugins: [],
};
