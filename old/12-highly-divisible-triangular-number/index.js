/*
 The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be
 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

 Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
 10: 1,2,5,10
 15: 1,3,5,15
 21: 1,3,7,21
 28: 1,2,4,7,14,28
 We can see that 28 is the first triangle number to have over five divisors.

 What is the value of the first triangle number to have over five hundred divisors?
 */

var max = 30;
var maxdiversions = 500;
var total = 0;
var solution = 0;
var i = 1;
var check = 1;
var current = 1;

while (solution == 0) {
    total += i;
    i++;

    if (i % 2 == 0 && check <= total) {
        var found = 1;
        for (var j = total / 2; j > 0; j--) {
            if (total % j === 0) {
                found++;
            }
        }

        if (found > current) {
            current = found;
            console.log(current);
        }

        if (found > maxdiversions) {
            solution = total;
        }
    }
}

console.log(solution);