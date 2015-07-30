// var path = require('path');
// var server = require(path.join(process.cwd(), '/lib/server'));
var chalk = require('chalk');

var Log = function(req, res) {
  var date = (new Date()).toUTCString()
  var method = req.method;
  var url = req.url;
  var userAgent = req.headers['user-agent'];

  if(res.statusCode != '200') {
    return '[' + date + '] ' + '\"' + chalk.red(method) + ' ' + chalk.red(url) + '\"' + ' ' + '\"' + userAgent + '\"';
  } else {
    return '[' + date + '] ' + '\"' + chalk.cyan(method) + ' ' + chalk.cyan(url) + '\"' + ' ' + '\"' + userAgent + '\"';
  }

  //if !error and statusCode ===200

}

module.exports = Log

