// tailwind.config.js
module.exports = {
  content: ["./src/**.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue_vibrat: "#007FFF",
        violet: "#8A2BE2",
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
