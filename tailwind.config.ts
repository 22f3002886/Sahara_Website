import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sahara: {
          50: "#fff8ed",
          100: "#fef0d6",
          200: "#fce0ad",
          300: "#f9c878",
          400: "#f5a842",
          500: "#e07a16",
          600: "#c85d0d",
          700: "#9c4c19", // Direct from official SAHARA logo!
          800: "#863c0d", // Deep brand terracotta from logo
          900: "#6e310e",
          950: "#3e1704",
        },
        warm: {
          50: "#faf8f5",
          100: "#f5f0ea",
          200: "#ece2d7",
          300: "#ddcebe",
          400: "#c7b29e",
          500: "#ad957f",
          600: "#937a66",
          700: "#796252",
          800: "#635043",
          900: "#524339",
          950: "#2c231d",
        },
        forest: {
          50: "#f2f7f3",
          100: "#e2ede4",
          200: "#c6dbc9",
          300: "#9ec1a4",
          400: "#70a178",
          500: "#4e8357",
          600: "#3b6943",
          700: "#305436",
          800: "#29432d",
          900: "#233827",
          950: "#101e13",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
        card: "0 2px 4px -1px rgba(0, 0, 0, 0.04), 0 4px 6px -1px rgba(0, 0, 0, 0.06)",
        float: "0 10px 25px -5px rgba(28, 25, 23, 0.08), 0 8px 10px -6px rgba(28, 25, 23, 0.04)",
      },
      borderRadius: {
        natural: "0.375rem",
      },
    },
  },
  plugins: [],
};

export default config;
