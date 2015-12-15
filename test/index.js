
var equal = require('assert-dir-equal');
var Metalsmith = require('metalsmith');
var drafts = require('..');
var del = require('del');

describe('metalsmith-drafts', function(){

  function cleanUp( done ) {
    del( 'test/**/build/' ).then( function (  ) {
      done();
    })
  }

  beforeEach(function(done) {
    cleanUp(done);
  });
  afterEach( function (done) {
    //cleanUp( done );
    done();
  });

  it('should remove drafts from output (default behavior / ensure backwards-compatibility)', function(done){
    Metalsmith('test/fixture/default')
      .use(drafts())
      .build(function(err){
        if (err) return done(err);
        equal('test/fixture/default/expected', 'test/fixture/default/build');
        done();
      });
  });

  it('should remove drafts from output (defaults=true)', function(done){
    Metalsmith('test/fixture/defaults-to-true')
      .use(drafts( {default: true}))
      .build(function(err){
        if (err) return done(err);
        equal('test/fixture/defaults-to-true/expected', 'test/fixture/defaults-to-true/build');
        done();
      });
  });

  it('should remove drafts from output (defaults=false)', function(done){
    Metalsmith('test/fixture/defaults-to-false')
      .use(drafts( {default: false}))
      .build(function(err){
        if (err) return done(err);
        equal('test/fixture/defaults-to-false/expected', 'test/fixture/defaults-to-false/build');
        done();
      });
  });

});