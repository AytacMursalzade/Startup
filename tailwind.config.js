// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max-600': { 'max': '600px' },
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1100px',
      },
    },
  },
  plugins: [],
};
