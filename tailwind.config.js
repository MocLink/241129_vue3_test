/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myColor: {
          'themeWhite': '#f5f5f5',
          'bottomText': '#bdbdbd',
          'footer': '#1c1d1c',
          'description': '#424242',
        },
      },
      screens: {
        'mobile': '375px',
        'tablet': '810px',
        'desktop': '1080px',
      },
      width: {
        width_con:  'calc(100% - 160px)',
      },
      boxShadow: {
        'header': '0 3px 9px rgba(37, 37, 37, 0.15)',
        '3xl': '0 7px 14px rgba(37, 37, 37, 0.3)',
        'inset-soft' : 'inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5)',
      },
      flexGrow:{
        2: '2',
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
  },
  plugins: [],
}