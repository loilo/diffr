import Vue from 'vue'

// Make the globals from the DefinePlugin in nuxt.config.js
// available as (constant) component data
Vue.mixin({
  computed: {
    /* eslint-disable no-undef */
    PUBLIC_PATH: () => PUBLIC_PATH,
    POSSIBLY_EMPTY_PUBLIC_PATH: () => POSSIBLY_EMPTY_PUBLIC_PATH
    /* eslint-enable no-undef */
  }
})
