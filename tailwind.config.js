/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#8E4FB0",
        secondary: "#AC78B4",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        bgprimary:"rgba(20,20,23,0.788)",
        boxprimary:"0rem 0.875rem 2.125rem 0rem rgba(0,0,0,0.5)",
        btnprimary:"#8B6ACC",
        btnsecondary:"#AC78B4",
        bggradient:"linear-gradient(144.39deg, #ffffff -278.56%, #e878ff -78.47%, #bc2bff 91.61%)",
        cardshadow:"0px 20px 100px -10px rgba(66, 71, 91, 0.1)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xxs:"300px",
      xs: "400px",
      ss: "425px",
      sm: "768px",
      md: "900px",
      lg: "1024px",
      xl: "1700px",
    },
  },
  plugins: [],
};