export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Courier New", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#000000", // Black as primary color
        },
        white: "#ffffff", // Adding white color separately if needed
      },
    },
  },
  plugins: [],
};
