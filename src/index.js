/**
 * @typedef {Object} Options
 * @property {Boolean} [default=false] Consider files without `draft` key drafts. Defaults to `false`.
 * @property {Boolean} [include=false] Include drafts in the build output. Defaults to `false`.
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
 * @param {Options|boolean} [options]
 * @returns {import('metalsmith').Plugin}
 * @example
 * metalsmith.use(drafts()) // same as { include: false }
 * metalsmith.use(drafts(true)) // same as { include: true }
 * metalsmith.use(drafts({ default: false, include: false })) // same as default
 */
function drafts(options = defaultOptions) {
  if (typeof options === 'boolean') {
    options = Object.assign({}, defaultOptions, { include: options })
  } else {
    options = Object.assign({}, defaultOptions, options)
  }

  return function drafts(files, metalsmith, done) {
    const debug = metalsmith.debug('@metalsmith/drafts')
    debug('Running with options: %o', options)

    if (options.include) {
      return done()
    }

    const asDraft = Object.keys(files).filter((path) => isDraft(files[path].draft, options.default))

    debug('Marked %s file(s) as draft', asDraft.length)

    asDraft.forEach((path) => {
      try {
        const success = delete files[path]
        // delete returns false in CJS non-strict mode
        /* istanbul ignore if */
        if (success === false) throw new Error()
        debug.info('Removed draft "%s"', path)
        // but throws in CJS strict-mode or ESM mode
      } catch (err) {
        /* istanbul ignore next */
        debug.error('Failed to remove draft at "%s"', path)
      }
    })

    done()
  }
}

export default drafts
