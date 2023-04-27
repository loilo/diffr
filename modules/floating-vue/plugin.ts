import { defineNuxtPlugin } from '#app'
import FloatingVue from 'floating-vue'

export default defineNuxtPlugin(nuxtApp => {
  // @TODO cutomization
  nuxtApp.vueApp.use(FloatingVue)
})
