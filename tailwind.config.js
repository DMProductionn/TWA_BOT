/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'blue-dark': '#0F2644',
        'blue-medium': '#134773',
        'blue-light': '#1767A1',
        'blue-super-light': '#1FA9FF',
        green: '#00E577',
        red: '#E50046',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
