/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440',
    },
    extend: {
      colors:{
        lightGreen : "#15C39A",
        darkGreen : "#068164",
        brightGreen : "#53fcd5",
        darkGold:'#745401',
        lightGold:'#f9cf66',
        veryDarkGold:'#362703',
        veryLightGrey:'#949698',
      },
      fontFamily:{
        'body':['Ubuntu']
      }
    },
  },
  plugins: [],
}

