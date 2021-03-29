import webpack from 'webpack'

// Read the public path from the environment.
// This may be used to deploy to a non-root folder of a domain.
const PUBLIC_PATH = process.env.PUBLIC_PATH || '/'
const POSSIBLY_EMPTY_PUBLIC_PATH = PUBLIC_PATH === '/' ? '' : PUBLIC_PATH

export default {
  target: 'static',

  // Inform the router about the base directory
  router: {
    base: `${POSSIBLY_EMPTY_PUBLIC_PATH}/`
  },

  // Page head data (mostly various icons)
  head: {
    title: `Diffr | The Online Text Diffing Tool`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Create and share diffs with Diffr, the privacy focused online text diffing tool.'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'application-name',
        content: 'Prettier PHP'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Prettier PHP'
      },
      {
        name: 'theme-color',
        content: '#1a2b34'
      },
      {
        name: 'msapplication-navbutton-color',
        content: '#1a2b34'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent'
      },
      {
        name: 'msapplication-starturl',
        content: PUBLIC_PATH
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/favicon.ico`
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/favicon.png`
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/favicon.svg`
      },
      { rel: 'icon', href: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/favicon.png` },
      {
        rel: 'apple-touch-icon',
        href: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/apple-icon-180.png`
      }
    ]
  },

  // Vue plugins to use
  plugins: ['~/plugins/globals.js'],

  // NuxtJS dev-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  // NuxtJS modules to use
  modules: ['@nuxtjs/pwa'],

  // Details for the web app manifest
  manifest: {
    name: 'Diffr | The Online Text Diffing Tool',
    short_name: 'Diffr',
    description:
      'Create and share diffs with this privacy focused online text diffing tool.',
    lang: 'en',
    display: 'fullscreen',
    background_color: '#2FB1F0',
    theme_color: '#2FB1F0',
    icons: [
      {
        src: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/android-icon-48.png`,
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/android-icon-72.png`,
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/android-icon-96.png`,
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/android-icon-144.png`,
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/android-icon-168.png`,
        sizes: '168x168',
        type: 'image/png'
      },
      {
        src: `${POSSIBLY_EMPTY_PUBLIC_PATH}/icons/android-icon-192.png`,
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  },

  // Build configuration
  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    },

    transpile: ['lodash-es', 'vue-context'],

    // Adjust webpack
    extend(config, { isClient }) {
      config.output.globalObject = 'self'

      // Set global constants
      config.plugins.push(
        new webpack.DefinePlugin({
          PUBLIC_PATH: JSON.stringify(PUBLIC_PATH),
          POSSIBLY_EMPTY_PUBLIC_PATH: JSON.stringify(POSSIBLY_EMPTY_PUBLIC_PATH)
        })
      )

      // Use the Monaco Editor plugin in the client-side build
      if (isClient) {
        const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
        config.plugins.push(
          new MonacoWebpackPlugin({
            languages: [],
            features: []
          })
        )
      }
    }
  }
}
