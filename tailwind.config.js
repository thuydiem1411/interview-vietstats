const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      screens: {
        "max-sm": { max: "639px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1279px" },
        "2xl": { max: "1537px" },
      },
    },
  },
  plugins: [],
});
