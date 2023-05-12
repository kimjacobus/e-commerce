/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
      fontFamily: {
        nimbus: ['nimbus'],
        nunito: ['nunito'],
        nunitoItalic: ['nunito-italic'],
        archivo: ['archivo-black'],
        montserrat: ['montserrat'],
        montserratItalic: ['montserrat-italic'],
        quicksand: ['quicksand'],
        chillax: ['chillax'],
        compagnon: ['compagnon'],
        compagnonItalic: ['compagnon-italic'],
        compagnonMed: ['compagnon-med'],
        format: ['format'],
        lackline: ['lackline'],
        lacklineItalic: ['lackline-italic'],
        lacklineReg: ['lackline-reg'],
        milli: ['milli'],
        milliLight: ['milli-light'],
      },
    },
  },
  plugins: [import('daisyui')],
}
