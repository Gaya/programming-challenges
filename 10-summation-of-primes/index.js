/*
 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

 Find the sum of all the primes below two million.
 */

var limit = 2000000;
var sum = 0;

for (var i = 0; i < limit; i++) {
    if (isPrime(i)) {
        sum += i;
    }
}

console.log(sum);

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