// Only expose `url-state` in the browser as it uses browser globals

module.exports = process.browser ? require('./url-state') : undefined
