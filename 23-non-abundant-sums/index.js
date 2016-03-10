/*
 A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the
 sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

 A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum
 exceeds n.

 As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of
 two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be
 written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even
 though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than
 this limit.

 Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

var limit = 28123;
var allAbundant = [];
var sumOfAbundants = {};
var total = 0;

for (var i = 1; i < limit; i++) {
  if (isAbundant(i)) {
    allAbundant.push(i);
  }
}

for (var i = 0; i < allAbundant.length; i++) {
  for (var j = 0; j < allAbundant.length; j++) {
    var sum = allAbundant[i] + allAbundant[j];
    if (!sumOfAbundants[sum]) {
      sumOfAbundants[sum] = true;
    }
  }
}

for (var i = 0; i < limit; i++) {
  if (!sumOfAbundants[i]) {
    total += i;
  }
}

console.log(total);

function isAbundant(number) {
  var divisors = findDivisors(number);

  if (divisors.length === 0) {
    return false;
  }

  var sumOfDivisors = divisors.reduce((prev, current) => prev + current);

  return (number < sumOfDivisors);
}

function findDivisors(number) {
  var divisors = [];

  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}