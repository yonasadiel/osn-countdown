var hour = (function() {
  var i, results;
  results = [];
  
  for (i = 0; i < 24; ++i) {
    results.push(i + '');
  }
  
  return results;
})();

var minute = (function() {
  var i, results;
  results = [];
  
  for (i = 0; i < 60; ++i) {
    results.push(i + '');
  }
  
  return results;
})();

var second = (function() {
  var i, results;
  results = [];
  
  for (i = 0; i < 60; ++i) {
    results.push(i+'');
  }
  
  return results;
})();

var milis = (function() {
  var i, results;
  results = [];
  
  for (i = 999; i >= 0; --i) {
    results.push(i + '');
  }
  
  return results;
})();

var makeTime = function(hour, minute, second) {
  var retval = 0;
  
  retval += hour * 3600;
  retval += minute * 60;
  retval += second;
  
  return retval;
};

var makeTimeFromHexaFlip = function(hexaValue) {
  var hour    = parseInt(hexaValue[0]);
  var minute  = parseInt(hexaValue[1]);
  var second  = parseInt(hexaValue[2]);
  
  return makeTime(hour, minute, second);
}

