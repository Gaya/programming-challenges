/*
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 a2 + b2 = c2
 For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.
 */

//a2 + b2 = c2, a + b + c = 1000

var outcome = 1000;

sumOfPytha(56, 33);

function sumOfPytha(a, b) {
    var s = euclid(a, b);
    var c = pytha(s.a, s.b);
    console.log(s.a, s.b, c, (s.a + s.b + c));
}

function exp(input) {
    return Math.pow(input, 2);
}

function sqrt(input) {
    return Math.sqrt(input);
}

function pytha(a, b) {
    return sqrt(exp(a) + exp(b));
}

function euclid(m, n) {
    return {
        a: exp(m) - exp(n),
        b: 2 * m * n
    }
}