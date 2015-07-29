// Going to get a string ‘/cal/2015’ OR ‘/cal/1/2015’ OR '/cal/2015/1'

// {year: 2015, month: 1}
// {year: 2015, month: 1}
// {year: 2015}
// {}

// ./cal 1 2015
// ./cal 1 2015
// ./cal 2015
// ./cal

//transfer one string to another string

var expect = require('chai').expect;
var path = require('path');
var parse = require(path.join(process.cwd(), '/lib/calURLParse'));


describe('calURLParse', function() {
  it('should handle the base cal route', function() {
    expect(parse('/cal')).to.equal('./cal');
  });
  it('should handle a full year route', function() {
    expect(parse('/cal/2015')).to.equal('./cal 2015');
    expect(parse('/cal/9999999')).to.equal('./cal 9999999');
  });
  it('should handle a month first route', function() {
    expect(parse('/cal/1/2015')).to.equal('./cal 1 2015');
  });
  it('should handle a month last route', function() {
    expect(parse('/cal/2015/1')).to.equal('./cal 1 2015');
  });
  it('should handle invalid routes', function() {
    expect(parse('/cal/foo')).to.equal(undefined);
    expect(parse('/cal/foobar')).to.equal(undefined);
    expect(parse('/cal/foo/2015')).to.equal(undefined);
    expect(parse('/cal/foo/2015/bar')).to.equal(undefined);
  });
});
