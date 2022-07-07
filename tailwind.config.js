/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-400': 'hsl(231, 69%, 60%)',
        'secondary-400': 'hsl(0, 94%, 66%)',
        'neutral-400': 'hsl(229, 8%, 60%)',
        'neutral-800': 'hsl(229, 31%, 21%)',
      },
      backgroundImage: {
        'dot-pattern': 'url(/images/bg-dots.svg)',
      },
      height: {
        header: '6.5rem',
        'header-xl': '8.5rem',
      },
      width: {
        'max-lg': '980px',
        'max-xl': '1240px',
        'max-2xl': '1330px',
      },
      screens: {
        '2xl': '1440px',
      },
      padding: {
        header: '6.5rem',
        'header-xl': '8.5rem',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
