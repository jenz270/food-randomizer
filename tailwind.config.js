/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        titleColor: '#8a68c8',
        buttonColor: '#c868a6',
        boxBackgroundColor: "#E7E7E7",
        greenColor: "#45CB85",
        greenTextColor: "#668976",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      sm: "760px",
      md: "1060px",
    },
  },
  plugins: [],
}
