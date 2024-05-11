// /** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "regal-blue": {
          light: "rgba(165, 180, 252, 0.5)",
          DEFAULT: "#3b54d5",
        },
        "regal-red": {
          light: "rgba(252, 165, 165, 0.5)",
          DEFAULT: "#f87171",
        },
        "regal-yellow": {
          light: "rgba(254, 252, 191, 0.5)", 
          DEFAULT: "#f9be00", 
        },
      },
    },
  },
  plugins: [],
};
