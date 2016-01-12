exports.multiply = function () {
  var parameters = arguments[0];
  var product = parameters[0];
  for (var i = 1; i < parameters.length; i++) {
    product = product * parameters[i];
  }
}