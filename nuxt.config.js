export default {
  server: {
    host: '0.0.0.0',
    port: 7070,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bootleg-breathing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Gantari:wght@500&display=swap" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',  
    '@nuxtjs/color-mode',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'bootleg breathing',
    },
    icon: {
      source: './static/icon.png',
      fileName: 'icon.png',
    },
    meta: {
      theme_color: '#FFAF00',
    }
  },

  // Sound configuration
  sound: {
    breathIn: {
      src: "./assets/sound/BreathIn.mp3",
      // options: {
      //   volume: 0.25
      // }
    },
    breathOut: {
      src: "./assets/sound/BreathOut.mp3",
      // options: {
      //   volume: 0.25
      // }
    },
    japaneseWaterGarden: {
      src: "./assets/sound/music/JapaneseWaterGarden.mp3",
      options: {
        volume: 0.25
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
    
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
