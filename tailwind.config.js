module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
          //  colors:{
          //      primary: '#563727',
          //      secondary: '#372c2e'
          //  }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }