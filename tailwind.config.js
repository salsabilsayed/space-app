module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily :{
        subTitle : ['Barlow Condensed', 'sans-serif'],
        bellefair : ['Bellefair', 'serif']
      },

      colors: {
        blueGray: '#d0d6f9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
