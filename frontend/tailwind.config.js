/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ['"Archivo Black"', 'serif'],
        Robato : [ '"Roboto"', 'serif'],
        Aclonica : [ '"Aclonica"', 'serif']
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

  