/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#232323",
        light: "#f5f5f5",
        primary: "#6FAE4E", // 240,86,199
        secondary: "#0C3F6C", // 80,230,217
      }
    },
  },
  plugins: [],
}

