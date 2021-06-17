module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*/.html/'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'title': ['Montserrat'],
        'roboto': ['Roboto'],
        'poppins': ['Poppins', 'sans-serif'],
        'vietnam': ['Be Vietnam', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
