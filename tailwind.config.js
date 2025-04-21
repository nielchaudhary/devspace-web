/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 1s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '200% center' },
        },
      },
      backgroundSize: {
        'gradient': '200% auto',
      }
    },
  },
  plugins: [],
}