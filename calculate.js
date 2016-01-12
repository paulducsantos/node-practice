var addition = require("./addition.js");
var subtract = require("./subtract.js");
var multiply = require("./multiply.js");

var params = process.argv.slice(3);
var result;

switch(process.argv[2]) {
  case "add":
  case "plus":
    result = addition(params);
    break;

  case "sub":
  case "minus":
  case "subtract":
    result = subtract.doIt(params);
    break;

  case "times":
  case "multiply":
    result = multiply.multiply(params);

  default:
    result = subtract.dontDoIt();

}
console.log(result);