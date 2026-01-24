/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      'deep-space': '#0F172A',
      'neon-pink': '#F472B6',
      'electric-blue': '#38BDF8',
      'glass-white': 'rgba(255, 255, 255, 0.1)'
    },
    fontFamily: {
      sans: ["Outfit", 'sans-serif'],
    },
    keyframes: {
      fadeInDown: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': {transform: 'translateY(0', opacity: '1'},
      },
      float: {
        '0%': { transform: 'translateY(-10px)' },
        '50%': {transform: 'translateY(-10px)'},
      }
    },
    animation: {
      fadeInDown: 'fadeInDown 0.8s ease-out forwards',
      float: 'float 6s ease-in-out infinite',
    },
  },
  plugins: [],
}