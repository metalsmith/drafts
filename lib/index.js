
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to hide drafts from the output.
 *
 * @return {Function}
 */

function plugin(opts){

  var draftFallback = (opts && strictBool(opts.default) !== undefined) ? strictBool(opts.default) : false;

  function strictBool( val ) {
    if (typeof val == 'boolean') {
      return val;
    }
    if (typeof val == 'string') {
      if (val.toLowerCase() === 'true') {
        return true;
      } else if (val.toLowerCase() === 'false') {
        return false;
      }
    }
    return undefined;
  }

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      var data = files[file];
      var isDraft = strictBool(data.draft) !== undefined ? strictBool(data.draft) : draftFallback;
      if ( isDraft ) {
        delete files[file];
      }
    });
  };
}