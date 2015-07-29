var http = require('http');
var https = require('https');

module.exports = function(port) {
  http.createServer(function(req, res) {
    if(req.method === 'GET' && req.url === '/weather') {
      res.writeHeader(200, {
        'Content-type': 'application/json',
        'Access-control-Allow-Origin': '*'
      });
      https.get('https://api.forecast.io/forecast/4d8af6d0c2fb559de92cee1803f741d7/37.8267,-86.7777')
      .on('response', function (xhr) {
        xhr.pipe(res);
      });

    } else if (req.method === 'GET' && req.url === '/starwars') {
      res.writeHeader(200, {
        'Content-type': 'application/json',
        'Access-control-Allow-Origin': '*'
      });
      http.get('http://swapi.co/api/films/')
      // .on('response', function (xhr) {  //pipe containes all movie data
      //   xhr.pipe(res);
      .on('response', function (xhr) {
        var body = '';
      xhr
      .on('data', function (chunk) {
        body += chunk;
      })
      .on('end', function () {
        var data = JSON.parse(body)

        data.results.forEach(function(r) {
          res.write(r.title + '\n');
      });
        res.end();
      });
    });

    // } else if (req.method === 'GET' && req.url.slice(0, 4) === '/cal') {


    } else {
      res.writeHead(403);
      res.end('Access Denied');
    }

  }).listen(port);

}
