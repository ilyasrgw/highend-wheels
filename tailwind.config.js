/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EAF2F8", // Light Blue
          100: "#D6E5F1",
          200: "#A2D5F2", // Sky Blue
          300: "#74C0E0",
          400: "#58A4B0", // Teal Blue
          500: "#205375", // Steel Blue
          600: "#173F5F",
          700: "#112A46", // Deep Navy (Your Main Color)
          800: "#0B1D30",
          900: "#091523", // Almost Black
        },
        accent: {
          50: "#FFF5E5", // Very Light Orange
          100: "#FFE8C8", // Soft Beige
          200: "#FFD8A2",
          300: "#FFAB4C", // Soft Orange (Primary Accent)
          400: "#FF9840",
          500: "#C8963E", // Muted Gold
          600: "#A57A32",
          700: "#7A5B26",
          800: "#5C431E",
          900: "#402E1C",
        },
        neutral: {
          50: "#F7FAFC", // Light Neutral for Backgrounds
          100: "#E6EBF0",
          200: "#D1D5DB",
          300: "#A8B2BD",
          400: "#6B7280", // Medium Gray
          500: "#424E5C",
          600: "#303846",
          700: "#222831",
          800: "#171B21",
          900: "#0F1317", // Dark Gray/Black
        },
      },
      keyframes: {
        rotate: {
          "100%": {
            transform: "rotate(1turn)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        rotate: "rotate 1s infinite linear",
        fadeIn: "fadeIn 1s ease-in-out",
        imageTransition: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
