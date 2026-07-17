/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'scassa-navy': '#001F3F',
        'scassa-gold': '#D4AF37',
        'scassa-gray': '#F8F9FA',
      },
    },
  },
  plugins: [],
}
