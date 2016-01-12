var addition = require("./addition.js");
var subtract = require("./subtract.js");
var multiplyOrDivide = require("./multiplyOrDivide.js");

var params = process.argv.slice(2);
var result = params[0];
console.log([result, params[2]]);
for (var i = 1; i < params.length; i += 2) {
  switch(params[i]) {
    case "add":
    case "plus":
      result = addition([result, params[i + 1]]);
      break;

    case "sub":
    case "minus":
    case "subtract":
      result = subtract.doIt([result, params[i + 1]]);
      break;

    case "times":
    case "multiply":
      result = multiplyOrDivide.multiply([result, params[i + 1]]);
      break;

    case "divide":
      result = multiplyOrDivide.divide([result, params[i + 1]]);
      break;

    default:
      result = subtract.dontDoIt();
  }

}
console.log(result);