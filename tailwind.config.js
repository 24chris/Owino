module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        spacing:{
          '1/2':'50%',
          '11/12':'85.715%',
          '12/12':'100%'
        }
      },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
  }

