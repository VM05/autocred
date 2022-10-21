module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#212559',
          800: '#212459',
          700: '#4c4f79',
          600: '#767993',
          500: '#dbdde2',

        },
        secondary: {
          900: '#BA0B7C',
          800: '#cb4a9b',
          // 700: '#e7c0d9',
          700: '#c64a9a',
          600: '#ffe0f4',
          500: '#FEFAFB',

        },
        black: {
          100: '#121820',
          50: '#7b7e82',
          25: '#f1f1f3',
        },
        hablemos: {
          100: '#fafaff',
          300: '#f9f9f9'
        },
        whatsapp: {
          900:'#25D366',
          700:'#23aa54',
        },
        
      }
    },
  },
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
}
