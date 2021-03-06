const axios = require('axios')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 9999
  },
  head: {
    title: 'jkrs.dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      href: 'https://use.typekit.net/hbe5dps.css'
    }]
  },

  pageTransition: {
    name: "default",
    mode: "out-in"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-request',
    '@nuxtjs/date-fns',
    '@nuxt/image',
    ['@nuxtjs/eslint-module', {
      fix: true
    }],
    // https://go.nuxtjs.dev/stylelint
    ['@nuxtjs/stylelint-module', {
      fix: true,
      configPage: 'stylelint.config.js'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'storyblok-nuxt'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  },
  tailwindcss: {
    exposeConfig: true
  },
  graphql: {
    clients: {
      default: {
        endpoint: 'https://gapi.storyblok.com/v1/api',
        options: {
          headers: {
            token: 'sZUcBEZiCUQNtT3CQAZrzgtt',
          },
        },
      },
    },
    options: {},
    useFetchPolyfill: true,
    includeNodeModules: true,
  },
  dateFns: {
    locales: ['en-AU'],
    defaultLocale: 'en-AU',
    format: 'EEEE, Do MM yyyy'
  },
  /**
   * Routes
   */
  generate: {
    generate: {
      fallback: true,
      fallback: 'index.html' // Replace with 404
    },
    routes: function (callback) {
      const token = `sZUcBEZiCUQNtT3CQAZrzgtt`
      const version = 'published'
      let cache_version = 0

      let toIgnore = ['home', 'settings', 'categories', 'partners', 'team-members']

      // other routes that are not in Storyblok with their slug.
      let routes = ['/posts', '/'] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

        // timestamp of latest publish
        cache_version = space_res.data.space.version

        // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (!toIgnore.includes(res.data.links[key].slug)) {
              var fullSlug = res.data.links[key].slug
              routes.push(fullSlug)
            }
          })

          callback(null, routes)
        })
      })
    }
  },
}