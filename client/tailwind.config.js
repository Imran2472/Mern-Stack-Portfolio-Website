/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        light: {
          // Light theme colors
          primary: "#333",
          secondary: "#666",
          background: "#f9f9f9",
        },
        dark: {
          // Dark theme colors
          primary: "#fff",
          secondary: "#ccc",
          background: "#333",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
