/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020043",
        secondary: "#343268",
        primaryBtn: "#FFC637 ",
      },
    },
  },
  plugins: [require("daisyui")],
};
