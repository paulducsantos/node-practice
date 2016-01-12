exports.multiply = function () {
  var parameters = arguments[0];
  var product = parseFloat(parameters[0]);
  for (var i = 1; i < parameters.length; i++) {
    product = product * parseFloat(parameters[i]);
  }
  return product;
}

exports.divide = function () {
  var parameters = arguments[0];
  var quotient = parseFloat(parameters[0]);
  for (var i = 1; i < parameters.length; i++) {
    quotient = quotient / parseFloat(parameters[i]);
  }
  return quotient;
}