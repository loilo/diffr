import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.options.vue.compilerOptions.directiveTransforms =
      nuxt.options.vue.compilerOptions.directiveTransforms || {}
    nuxt.options.vue.compilerOptions.directiveTransforms.tooltip = () => ({
      props: [],
      needRuntime: true,
    })

    nuxt.options.css.push('floating-vue/dist/style.css')

    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      ssr: false,
      mode: 'client',
      src: resolve('./plugin'),
    })

    // @TODO remove when floating-ui supports native ESM
    nuxt.options.build.transpile.push(
      'floating-vue',
      '@floating-ui/core',
      '@floating-ui/dom',
    )
  },
})
