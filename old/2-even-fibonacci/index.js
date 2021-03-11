var sum = 2;
var terms = [1, 2];
var max = 4000000;
var newTerm = 0;
var nextTerm = 0;

do {
    newTerm = terms[terms.length - 2] + terms[terms.length - 1];
    nextTerm = terms[terms.length - 1] + newTerm;
    terms.push(newTerm);

    if (newTerm % 2 === 0) {
        sum += newTerm;
    }
} while (nextTerm < max);

console.log(sum);