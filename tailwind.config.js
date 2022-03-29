/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        'offset-8p': 'calc(.66667rem + 8.33333%)',
      },
      maxWidth: {
        '900': '69.33333rem',
        '8p': '8.33333%',
        '16p': '16.66667%',
        '25p': '25%',
        '33p': '33.33333%',
        '41p': '41.66667%',
        '50p': '50%',
        '58p': '58.33333%',
        '66p': '66.66667%',
        '75p': '75%',
        '83p': '83.33333%',
        '91p': '91.66667%',
      },
      colors: {
        primary: '#FF6464',
        primary_opacity: '#FF4F4F',
        secondary: '#00A8CC',
        secondary_opacity: '#EDF7FA',
        dark: '#21243D',
        light: '#8695A4'
      }
    }
  },
  variants: {},
  plugins: [
  ],
}
