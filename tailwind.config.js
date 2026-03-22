/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './portfolio/**/*.{html,js}',
    './portfolio/partials/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-in-delayed': 'fadeIn 1s ease-in-out 0.3s forwards',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
