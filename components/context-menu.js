// Only expose `vue-context` in the browser as it uses browser globals

export default process.browser ? require('vue-context').default : undefined
