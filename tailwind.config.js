module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "8xl": "5rem",
        "9xl": "10rem",
        "10xl": "12rem",
      },
      fontFamily: {
        sono: "Sono, sans-serif",
        inter: "Inter, sans-serif",
      },
      lineHeight: {
        'squash': "0.7",
      }
    },
  },
  plugins: [],
};
