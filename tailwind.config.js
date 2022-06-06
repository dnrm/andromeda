module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "8xl": "5rem",
        "9xl": "10rem",
        "10xl": "12rem",
      },
      colors: {
        snow: "#FFFCFF",
        davys: "#50514F",
        ash: "#CBD4C2",
        aqua: "#2B91BD",
        khaki: "#E6DFD4"
      },
      fontFamily: {
        sono: "Sono, sans-serif",
        inter: "Inter, sans-serif",
        "space-grotesk": "Space Grotesk, sans-serif",
        "tan-nimbus": "'Tan Nimbus', sans-serif",
      },
      lineHeight: {
        squash: "0.7",
      },
    },
  },
  plugins: [],
};
