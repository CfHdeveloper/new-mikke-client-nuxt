//env読み込み
require('dotenv').config()

module.exports = {

  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'mikke-client-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
        type: 'image/x-icon', 
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', 
        crossorigin: "anonymous"},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700"
      }

    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  modules: [
    '@nuxtjs/dotenv',
    'nuxt-fontawesome'
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },

  plugins: [
    '~/plugins/resource.js',
    { src: '~/plugins/scroll.js', ssr: false }
  ],

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [
    '@/assets/css/global.scss',
    '@/assets/css/reset.scss',
    '@/assets/css/animation.scss'

  ]
}

