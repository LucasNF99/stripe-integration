/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        headerBg: "url('/bg-header.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
}