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
    mode: "out-in",
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
  build: {},
  tailwindcss: {
    configPath: '~/tailwind.config.js'
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
    format: 'EEEE, Io MMMM yyyy'
  },
}