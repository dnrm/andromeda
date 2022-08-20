module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "8xl": "7rem",
        "9xl": "10rem",
        "10xl": "12rem",
      },
      colors: {
        snow: "#FFFCFF",
        davys: "#50514F",
        ash: "#CBD4C2",
        aqua: "#2B91BD",
        khaki: "#F1E8D1",
        "bright-yellow": "#FFCF54",
        maroon: "#CF8441",
        leaf: "#697967",
      },
      fontFamily: {
        sono: "Sono, sans-serif",
        inter: "Inter, sans-serif",
        "space-grotesk": "Space Grotesk, sans-serif",
        "tan-nimbus": "'Tan Nimbus', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
      lineHeight: {
        squash: "0.7",
      },
      borderWidth: {
        20: "20px",
      },
      typography: {
        DEFAULT: {},
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
