
var equal = require('assert-dir-equal');
var Metalsmith = require('metalsmith');
var drafts = require('..');
var del = require('del');

describe('metalsmith-drafts', function(){

  beforeEach( function( done ) {
        del( 'test/**/build' ).then( function (  ) {
            done();
        })
  });

  it('should remove drafts from output (default behavior)', function(done){
    Metalsmith('test/fixture/default')
      .use(drafts())
      .build(function(err){
        if (err) return done(err);
        equal('test/fixture/default/expected', 'test/fixture/default/build');
        done();
      });
  });
});