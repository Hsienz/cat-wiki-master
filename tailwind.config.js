/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{pages,components}/**/*.{tsx,jsx,js,ts}'],
  theme: {
    extend: {
      colors:{
        brown: "#291507",
        yellow: '#e3e1dc',
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
