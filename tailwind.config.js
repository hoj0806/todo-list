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
        pink: "#FFCFD2",
        red: "#FFADAD",
        orange: "#FFD6A5",
        yellow: "#FBF8CC",
        green: "#CAFFBF",
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
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
