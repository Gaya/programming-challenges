/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

var bigInt = require("big-integer");
var pow = bigInt(2).pow(1000);
var lol = pow.toString();
var sum = 0;

for (var i = 0; i < lol.length; i++) {
     sum += parseInt(lol[i]);
}

console.log(sum);