module.exports = {
  // mode: 'jit',
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'card-toggle': 'calc(100% - 3rem)',
      }
    },
    minHeight: {
     'page': 'calc(100vh - 80px)', // header height -> 80px
    }
  },
  variants: {
    extend: {},
    scrollBehavior: ['motion-safe', 'motion-reduce', 'responsive'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scroll-behavior')(),
  ]
}