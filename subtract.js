exports.doIt = function() {
  var parameters = arguments[0];

  var result = parseFloat(parameters[0]);

  for(var i = 1; i < parameters.length; i++) {
    result -= parameters[i];
  }

  return result;
}

exports.dontDoIt = function() {
  return false;
}