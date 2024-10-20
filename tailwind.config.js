// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrat: "rgba(0, 127, 255, 0.7)",
        violet: "rgba(138, 43, 226, 0.7)",
        bg_button: "#FFD700",
        hover_blue: "#A3D5FF",
        hover_text_white: "#F2F2F2",
        text_color_par: "#5D6D7E",

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        bold: "bold",
        extrabold: 800,
        light: 300,
        regular: 400,
      }
    },
  },
  plugins: [],
};
