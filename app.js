
var chalk = require('chalk')
var port = process.env.PORT || 1337;

require('./lib/server')(port);

// var server = require('./lib/server');
// server(1337);

console.log('server running on' + ' ' + chalk.magenta.bold.underline("http://localhost:" + port))
