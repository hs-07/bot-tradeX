/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primaryGradient: "linear-gradient(0deg, #012DC5 0%, #0D0D0D 80%)",
      },
      colors: {
        primary: "#012DC5",
        background: "#0D0D0D",
        borderColor: "#292929",
        "light-gray": "#B1B1B1",
        "card-background": "#171717",
      },
    },
  },
  plugins: [],
};
