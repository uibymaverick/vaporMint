/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gilroy: ["Gilroy"],
      },
      colors: {
        "vapourmintMint-500": "#009C98",
        "vapourmintMint-400": "#00B3AE",
        "vapourmintMint-300": "#07EFEA",
        "vapourmintMint-200": "#2BFFFA",
        "vapourmintMint-100": "#6BFFFC",
        "vapourmintMint-75": "#96FFFD",
        "vapourmintMint-50": "#E6FFFE",

        "vapourmintBlue-500": "#2D009C",
        "vapourmintBlue-400": "#3300B3",
        "vapourmintBlue-300": "#4900FF",
        "vapourmintBlue-200": "#682BFF",
        "vapourmintBlue-100": "#956BFF",
        "vapourmintBlue-75": "#B496FF",
        "vapourmintBlue-50": "#EDE6FF",

        "vapourmintLuxury-500": "#5C009C",
        "vapourmintLuxury-400": "#6900B3",
        "vapourmintLuxury-300": "#9600FF",
        "vapourmintLuxury-200": "#A82BFF",
        "vapourmintLuxury-100": "#C26BFF",
        "vapourmintLuxury-75": "#D496FF",
        "vapourmintLuxury-50": "#F5E6FF",

        "vapourmintPink-500": "#9C0076",
        "vapourmintPink-400": "#B30087",
        "vapourmintPink-300": "#FF00C1",
        "vapourmintPink-200": "#FF2BCC",
        "vapourmintPink-100": "#FF6BDB",
        "vapourmintPink-75": "#FF96E6",
        "vapourmintPink-50": "#FFE6F9",

        "vapourmintError-500": "#EE4D37",
        "vapourmintError-400": "#F16B59",
        "vapourmintError-300": "#F5988B",
        "vapourmintError-200": "#F8B6AD",
        "vapourmintError-100": "#FDEDEB",

        "vapourmintWarning-500": "#F08D32",
        "vapourmintWarning-400": "#F3A055",
        "vapourmintWarning-300": "#F6BD88",
        "vapourmintWarning-200": "#F9D0AB",
        "vapourmintWarning-100": "#FEF4EB",

        "vapourmintSuccess-500": "#06C270",
        "vapourmintSuccess-400": "#30CC88",
        "vapourmintSuccess-300": "#6FDCAC",
        "vapourmintSuccess-200": "#99E6C4",
        "vapourmintSuccess-100": "#E6F9F1",

        "vapourmintBlack-300": "#000000",
        "vapourmintBlack-200": "#434343",
        "vapourmintBlack-100": "#7B7B7B",

        "vapourmintWhite-300": "#A3A3A3",
        "vapourmintWhite-200": "#C7C6C6",
        "vapourmintWhite-100": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
