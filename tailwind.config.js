/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9F0D',
        dark: '#0D0D0D',
        'dark-lighter': '#1A1A1A',
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
