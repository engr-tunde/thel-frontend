/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        proPurple: "#7c5cc4",
        proLightPurple: "#8d5ccd",
        proOrange: "#ff8952",
        proGray: "#858c85",
        proGreen: "#00c689",
        proBlue: "#297ff9",
        proBtnPacificBlue: "#17a2b8",
        proBtnYellow: "#ffc107",
      },
    },
  },
  plugins: [],
};
