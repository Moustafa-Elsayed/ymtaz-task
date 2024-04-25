/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Almarai"],
      },
      fontSize: {
        main_title: "32px",
        Second_title: "28px",
        third_title: "24px",
        title: "20px",
        header: "14px",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        main: "#2C4768",
        second: "#A3A4A5 ",
      },
    },
  },
  plugins: [],
};
