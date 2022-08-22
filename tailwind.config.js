/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'violet': '#5964E0',
      'light-violet': '#939BF4',
      'very-dard-blue': '#19202D',
      'midnight': '#121721',
      'white': '#FFFFFF',
      'light-grey': '#F4F6F8',
      'gray': '#9DAEC2',
      'dark-gray': '#6E8098',
    },
    fontFamily: {
      'sans': ['Kumbh San', 'sans-serif'],
      'serif': ['sans-serif'],
      'body': ['"Kumbh San"'],
    }
  },
  plugins: [],
}