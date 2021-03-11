/*
 n! means n × (n ? 1) × ... × 3 × 2 × 1

 For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

 Find the sum of the digits in the number 100!
 */

var bigInt = require("big-integer");

function factorialSum(number) {
  number = bigInt(number);
  var factorSum = number;
  var sum = 0;

  while (number.gt(1)) {
    number = number.subtract(1);
    factorSum = factorSum.multiply(number);
  }

  var sNumber = factorSum.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    sum += parseInt(sNumber.charAt(i));
  }

  return sum;
}

console.log(factorialSum(100));