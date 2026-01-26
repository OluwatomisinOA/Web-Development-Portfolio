/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        'crypto-dark': '#0b0e11',
        'crypto-card': '#1e2329',
        'crypto-green': '#0ecb81',
        'crypto-red': '#f6465d',
      },
      keyframes: {
        fadeInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
        float: {
          '0%': { transform: 'translateY(-10px)' },
          '50%': {transform: 'translateY(10px)'},
        }
      },
      animation: {
        fadeInDown: 'fadeInDown 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

