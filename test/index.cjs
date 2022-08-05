/* eslint-env node, mocha */

const equal = require('assert-dir-equal')
const Metalsmith = require('metalsmith')

/* eslint-disable-next-line import/no-internal-modules */
const drafts = require('../lib/index.cjs')

describe('@metalsmith/drafts', function () {
  it('should remove drafts from output (default behavior / ensure backwards-compatibility)', function (done) {
    Metalsmith('test/fixtures/default')
      .use(drafts())
      .build(function (err) {
        if (err) return done(err)
        equal('test/fixtures/default/expected', 'test/fixtures/default/build')
        done()
      })
  })

  it('should allow a single (bool) param to include/omit drafts from output', function (done) {
    Metalsmith('test/fixtures/bool-param')
      .use(drafts(true))
      .build(function (err) {
        if (err) return done(err)
        equal('test/fixtures/bool-param/expected', 'test/fixtures/bool-param/build')
        done()
      })
  })

  it('should accept numbers & strings as values to ease using env variables', function (done) {
    Metalsmith('test/fixtures/input-types')
      .use(drafts())
      .build(function (err) {
        if (err) return done(err)
        equal('test/fixtures/input-types/expected', 'test/fixtures/input-types/build')
        done()
      })
  })

  it('should remove drafts from output (defaults=true)', function (done) {
    Metalsmith('test/fixtures/defaults-to-true')
      .use(drafts({ default: true }))
      .build(function (err) {
        if (err) return done(err)
        equal('test/fixtures/defaults-to-true/expected', 'test/fixtures/defaults-to-true/build')
        done()
      })
  })

  it('should remove drafts from output (defaults=false)', function (done) {
    Metalsmith('test/fixtures/defaults-to-false')
      .use(drafts({ default: false }))
      .build(function (err) {
        if (err) return done(err)
        equal('test/fixtures/defaults-to-false/expected', 'test/fixtures/defaults-to-false/build')
        done()
      })
  })
})
