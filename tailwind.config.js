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
        yellow: '#d4dba7',
        grey: '#ededed',
        white: '#fff',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(9deg, rgba(212, 219, 167,1) 2%, rgba(26,202,158,1) 15%, rgba(108,86,233,1) 100%);'
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
