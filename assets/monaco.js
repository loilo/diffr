// Only expose `monaco-editor` in the browser as it uses browser globals

/** @typedef {import('monaco-editor')} Monaco */

/**
 * @type Monaco
 */
const monaco = process.browser ? require('monaco-editor') : undefined

export default monaco
