// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = (String(import.meta.env.BASE_URL ?? '') + '/').replace(
  /\/+$/,
  '/',
)

export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-headlessui',
    'nuxt-monaco-editor',
    '~~/modules/floating-vue/module',
    '~~/modules/fix-manifest/module',
  ],
  app: { baseURL, keepalive: true },
  runtimeConfig: { public: { baseURL } },
  css: ['~/assets/css/global.scss'],
  pwa: {
    registerType: 'autoUpdate',
    base: baseURL,
    buildBase: baseURL,
    manifest: {
      name: 'Diffr | The Online Text Diffing Tool',
      short_name: 'Diffr',
      theme_color: '#19212F',
      icons: [
        {
          src: baseURL + 'diffr-pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: baseURL + 'diffr-pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: baseURL + 'diffr-pwa-512x512-maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: baseURL,
      globPatterns: ['**/*.{js,css,html,png,svg,ico,ttf,woff,woff2}'],
    },
    client: { installPrompt: true },
    devOptions: { enabled: true, type: 'module' },
  },
  googleFonts: { families: { 'Fragment+Mono': [400], Poppins: [400] } },
  colorMode: { storageKey: 'theme', classSuffix: '' },
})
