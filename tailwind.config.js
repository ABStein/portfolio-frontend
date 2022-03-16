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
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss/nesting'),
    require('postcss-import')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ]
  }
}
