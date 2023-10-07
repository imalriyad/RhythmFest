/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#155CC6",
      },
    },
  },
  plugins: [require("daisyui")],
};
