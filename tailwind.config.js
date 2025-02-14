/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'blue-dark': '#16171D', 
        'blue-medium': '#21242D',
        'blue-light': '#1767A1',
        'blue-super-light': '#1FA9FF',
        'green': '#48D05D',
        'red': '#F34949',
        'text-black': '#16171D'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};