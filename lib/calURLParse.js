
module.exports = function(url) {
  //var cal = cal path...something like '../cal/cal.js'
  //Then replace './cal ' with the variable cal below.
  var lvl1 = url.split('/')[2];
  var lvl2 = url.split('/')[3];

  if(lvl1 === undefined && lvl2 === undefined) {
    //no args
    return './cal';
  }

  if(lvl2 === undefined && +lvl1) {
    //one valid argument
    return './cal ' + lvl1;
  }

  if(+lvl1 && +lvl2) {
    //two valid args
    if(lvl1 > 12) {
      //year/month
      return './cal ' + lvl2 + ' ' + lvl1;
    } else if(lvl1) {
      //month/year
      return './cal ' + lvl1 + ' ' + lvl2;
    }
  }


}
