
var chalk = require('chalk')

require('./lib/server')(1337);

// var server = require('./lib/server');

// server(1337);

console.log('server running on' + ' ' + chalk.magenta.bold.underline("http://localhost:1337"))
