/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'Arial',
        'Helvetica',
        'sans-serif',
      ],
      serif: [
        'Georgia',
        'Cambria',
        'Times New Roman',
        'serif',
      ],
    },
    extend: {},
  },
  plugins: [],
};
