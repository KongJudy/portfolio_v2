/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        teal: '#1aca9e',
        red: '#DC4492',
        purple: '#6c56e9',
        yellow: '#f8fa92',
        grey: '#ededed',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',

        'gradient-rainbow2':
          'linear-gradient(94deg, rgba(26,202,158,1) 15%, rgba(108,86,233,1) 100%, rgba(248,250,146,1) 100%);'
      }),
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: []
};
