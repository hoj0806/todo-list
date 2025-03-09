/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Pretendard , monospace",
    },
    extend: {
      colors: {
        black: "#1F1F1F",
        "black-10": "#2A2A2A",
        pink: "#FFCFD2",
        red: "#FFADAD",
        red2: "#FF9090",
        orange: "#FFD6A5",
        orange2: "#FFBE78",
        yellow: "#FBF8CC",
        green: "#CAFFBF",
        green2: "#A8F5A0",
        "blue-10": "#98F5E1",
        "blue-20": "#9BF6FF",
        "purple-10": "#BDB2FF",
        "purple-20": "#FFC6FF",
        "white-10": "#FFFFFF",
        "white-20": "#FFF8E7",
        gray: "#C0C0C0",
      },

      fontWeight: {
        regular: "400",
        bold: "700",
      },
      screens: {
        mobile: "393px",
        tablet: "920px",
        desktop: "1204px",
      },
    },
  },
  plugins: [],
};
