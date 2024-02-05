/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        black: "var(--color-black)",
        white: "var(--color-white)",
        dark: "var(--text-dark)",
        light: "var(--text-light)",
        error: "var(--text-error)",
        success: "var(--text-success)",
      },
    },
  },
  plugins: [],
};
