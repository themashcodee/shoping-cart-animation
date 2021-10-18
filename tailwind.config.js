module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{jsx,tsx,js,ts}', './components/**/*.{jsx,tsx,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xsm': { 'min': '400px', 'max': '639px' },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
