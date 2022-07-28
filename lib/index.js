/**
 * @typedef {Object} Options
 * @property {Boolean} [default=false]
 * @property {Boolean} [include=true]
 */

const defaultOptions = {
  default: false,
  include: false
}

/**
 * Cast the value for `draft` to a boolean ('true',1 will be cast as true)
 * @access private
 * @param {Boolean|Number|String} value
 * @param {Boolean} fallback
 * @returns {Boolean}
 */
function isDraft(value, fallback) {
  if (typeof value === 'boolean') return value
  if (typeof value === 'string' && value.toLowerCase().match(/^(false|0)$/)) return false
  if (typeof value === 'undefined') return fallback
  return !!value
}

/**
 * Metalsmith plugin to hide drafts from the output.
 *
 * @param {Options} [options]
 * @returns {import('metalsmith').Plugin}
 */
function configureDrafts(options = defaultOptions) {
  if (typeof options === 'boolean') {
    options = { ...defaultOptions, include: options }
  } else {
    options = { ...defaultOptions, ...options }
  }

  console.log(options)
  return function drafts(files, metalsmith, done) {
    setImmediate(done)
    if (options.include) return
    Object.keys(files).forEach((path) => {
      if (isDraft(files[path].draft, options.default)) {
        delete files[path]
      }
    })
  }
}

module.exports = configureDrafts
