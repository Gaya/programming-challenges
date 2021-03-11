/*
 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?
 */

function isPrime(number) {
    if (number < 2) return false;

    var q = Math.sqrt(number);

    for (var i = 2; i <= q; i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }

    return true;
}

var found = 0;
var number = 0;

while (found < 10001) {
    number++;
    if (isPrime(number)) {
        found++;
    }
}

console.log(number, found); //found?