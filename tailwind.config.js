/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lafred: '#E50914',
        pagegray: '#1a1a1a',
        cardbg: '#242424',
        borderdark: '#2e2e2e',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.4s ease forwards',
        spinner: 'spin 0.7s linear infinite',
      },
    },
  },
  plugins: [],
}
