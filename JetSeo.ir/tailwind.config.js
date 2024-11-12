/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{html,js}'
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'custom' : '6fr 2fr',
      },
    },
  },
  plugins: [],
}

