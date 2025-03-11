/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'form-bg': '#FFF2F2',
        'input-border': '#374151',
        'button-purple': '#A78BFA',
        'text-dark': '#111827',
        'text-gray': '#9CA3AF',
        'text-light': '#535151',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 