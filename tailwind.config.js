/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      fontSize: {
        "10xl": ["9rem", { lineHeight: "1.2" }],
      },
      spacing: {
        13: "3.2rem",
      },
    },
  },
  plugins: [],
};
