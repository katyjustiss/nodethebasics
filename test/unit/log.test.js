var expect = require('chai').expect;
var path = require('path');
var Log = require(path.join(process.cwd(), '/lib/log'));

describe('log', function() {
  it('should create the log', function() {
    var date = (new Date()).toUTCString();
    var req1 = {
      method: 'GET',
      url: '/this/is/a/path.png',
      headers: {
        'user-agent': 'Lynx/2.8.8rel.2 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.0.2d'
      }
    };

    var req2 = {
      method: 'POST',
      url: '/my/form',
      headers: {
        'user-agent': 'curl/7.43.0'
      }
    };

    var goal1 = '[' + date + '] "\u001b[36mGET\u001b[39m \u001b[36m/this/is/a/path.png\u001b[39m" "Lynx/2.8.8rel.2 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.0.2d"';
    var goal2 = '[' + date + '] "\u001b[36mPOST\u001b[39m \u001b[36m/my/form\u001b[39m" "curl/7.43.0"';
    expect(Log(req1)).to.equal(goal1);
    expect(Log(req2)).to.equal(goal2);

  });
  it('should change the color if error', function() {
    var date = (new Date()).toUTCString();
    var req1 = {
      method: 'GET',
      url: '/this/is/a/path.png',
      headers: {
        'user-agent': 'Lynx/2.8.8rel.2 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.0.2d'
      }
    };
    //need to check the format of the status code.
    var error = {
      statusCode: "403",
    }

    var goal1 = '[' + date + '] "\u001b[31mGET\u001b[39m \u001b[31m/this/is/a/path.png\u001b[39m" "Lynx/2.8.8rel.2 libwww-FM/2.14 SSL-MM/1.4.1 OpenSSL/1.0.2d"';
    expect(Log(req1, error)).to.equal(goal1);


  });
 });

