/**
 * Metalsmith plugin to hide drafts from the output.
 * @version 1.1.0
 */

/**
 * @typedef {Object} Options
 * @property {Boolean} [default=false]
 */

const defaultOptions = {
  default: false,
};

/**
 * Cast the value for `draft` to a boolean ('true',1 will be cast as true)
 * @access private
 * @param {Boolean|Number|String} value
 * @param {Boolean} fallback
 * @returns {Boolean}
 */
function isDraft(value, fallback) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string' && value.toLowerCase() === 'false')
    return false;
  if (typeof value === 'undefined') return fallback;
  return !!value;
}

function drafts(options = defaultOptions) {
  const draftFallback = isDraft(options.default);

  return function draftsPlugin(files, metalsmith, done) {
    setImmediate(done);
    Object.keys(files).forEach((path) => {
      if (isDraft(files[path].draft, draftFallback)) {
        delete files[path];
      }
    });
  };
}

module.exports = drafts;
