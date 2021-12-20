const { describe, it, beforeEach, afterEach } = require('mocha')
const equal = require('assert-dir-equal')
const Metalsmith = require('metalsmith')
const drafts = require('..')
const del = require('del')

describe('metalsmith-drafts', function () {
  function cleanUp(done) {
    del('test/**/build/').then(function () {
      done()
    })
  }

  beforeEach(function (done) {
    cleanUp(done)
  })
  afterEach(function (done) {
    //cleanUp( done );
    done()
  })

  it('should remove drafts from output (default behavior / ensure backwards-compatibility)', function (done) {
    Metalsmith('test/fixtures/default')
      .use(drafts())
      .build(function (err) {
        if (err) return done(err)
        equal('test/fixtures/default/expected', 'test/fixtures/default/build')
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
