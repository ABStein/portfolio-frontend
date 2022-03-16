import { plugins } from "./tailwind.config";
import { join } from 'path'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      {src: "https://kit.fontawesome.com/d11cca7c30.js", crossorigin: "anonymous"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'font', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@1,400&display=swap' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: {
    tailwindcss: join(__dirname, 'tailwind.config.js'),
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {

  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: ''
      }
    }
  },
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    exposeConfig: true,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      postcssOptions: {
        order: ["tailwindcss/nesting", "tailwindcss", "autoprefixer"],
        plugins: {
          "postcss-nested": false,
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
