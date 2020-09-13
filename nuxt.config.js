export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router:{
    middleware:'auth'
  },

  /*
  ** Global CSS
  */
  css: [
    // 直接加载一个 Node.js 模块。（在这里它是一个 Sass 文件）
    // 项目里要使用的 SCSS 文件
      'assets/css/transition.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '~/plugins/vant-ui', ssr: true},
    {src: '~/plugins/rem', ssr: false},
    {src: '~/plugins/router', ssr: false},//路由
    {src: '~/plugins/axios', ssr:true},//网络请求
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true,
    // prefixL:"/api"
  },
  proxy:{
    '/api/':{
      target: 'http://localhost:3001' ,//代理转发的地址
      changeOrigin:true,
      pathRewrite:{

      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  loading:{
    color:"#cccccc",height:"3px"

  }
  //loading 可以为组件
  // loading:"~components/xxx"
}
