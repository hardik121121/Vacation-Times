/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0D9488',
          dark: '#0F766E',
          light: '#5EEAD4',
          50: '#F0FDFA',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#E8E0D0',
        },
        brown: {
          DEFAULT: '#292524',
          light: '#44403C',
          medium: '#57534E',
        },
        amber: {
          DEFAULT: '#B45309',
          light: '#D97706',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
}
