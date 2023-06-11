/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Russo One'],
      },
    },
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: '370px',
        md: '528px',
        lg: '784px',
        xl: '1040px',
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
};
