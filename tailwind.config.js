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
    },
  },
  plugins: [],
}
