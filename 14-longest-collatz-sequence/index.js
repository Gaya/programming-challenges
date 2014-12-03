/*
 The following iterative sequence is defined for the set of positive integers:

 n → n/2 (n is even)
 n → 3n + 1 (n is odd)

 Using the rule above and starting with 13, we generate the following sequence:

 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been
 proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

 Which starting number, under one million, produces the longest chain?

 NOTE: Once the chain starts the terms are allowed to go above one million.
 */

var max = 1000000;

function makeChain(input) {
    var chain = [];
    while (input > 1) {
        chain.push(input);

        if (input % 2 == 0) {
            input = input / 2;
        } else {
            input = (input * 3) + 1;
        }
    }
    chain.push(1);

    return chain;
}

var found = 0;
var length;
var answer = 0;

console.log(makeChain(1000000).length);

for (var i = 0; i < max; i++) {
    length = makeChain(i).length;

    if (length > found) {
        found = length;
        answer = i;

        console.log(found, i);
    }
}

console.log(found, answer);
