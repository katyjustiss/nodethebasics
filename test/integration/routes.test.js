var expect = require('chai').expect; //no execute on expect

var http = require('http');
var path = require('path');

describe('Routes', function() {
  this.timeout(30000);
  var port = Math.floor(Math.random() * 50000 + 10000); //number between 10000 and 60000
  var url = 'http://localhost:' + port;
  before(function() {
    //how to start server from javascript. Execute app.js file
    require(path.join(process.cwd(), '/lib/server'))(port);
  });

  it('should not respond to the /nonexisting route', function(done) { //async test
    http.get(url +'/nonexisting', function(res) {
      expect(res.statusCode).to.equal(403);
      done();
    });
  });


  it('should respond to the /weather route', function(done) { //async test
    http.get(url +'/weather', function(res) {
      var body = '';
      expect(res.statusCode).to.equal(200);

      res.on('data', function(chunk) {
        body += chunk;
      })
      res.on('end', function(data) {
        expect(body).to.contain('temperature');
        done();
      });
    });
  });


  it('should respond to the /starwars route', function(done) { //async test
    http.get(url +'/starwars', function(res) {
      var body = '';
      expect(res.statusCode).to.equal(200);
      res.on('data', function(chunk) {
        body += chunk;
      })
      res.on('end', function(data) {
        expect(body).to.contain('Empire'); //potentially copy in the entire thing if you know it.
        done();
      });
    });
  });

  //cal

});
