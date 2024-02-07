/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Vazir", "vazir"],
      },
    },
  },
  plugins: [],
};
