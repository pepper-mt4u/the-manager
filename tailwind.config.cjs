/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          50:  '#fef8f6',
          100: '#fde8e2',
          200: '#fbd0c4',
          300: '#f8b4a0',
          400: '#f49888',
          500: '#f09080',
          600: '#e07060',
          700: '#c85040',
          800: '#a03830',
          900: '#803020',
        },
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

