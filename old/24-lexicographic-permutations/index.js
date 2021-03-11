/*
 A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2,
 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The
 lexicographic permutations of 0, 1 and 2 are:

 012   021   102   120   201   210

 What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

var combinations = permutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

function permutations(xs) {
  return xs.length ? (chain(xs, function (x) {
    return chain(permutations(deleted(x, xs)), function (ys) {
      return ([[x].concat(ys)]);
    })
  })) : [[]]
}

// monadic bind/chain for lists
function chain(xs, f) {
  return [].concat.apply([], xs.map(f));
}

// drops first instance found
function deleted(x, xs) {
  return xs.length ? x === xs[0] ? xs.slice(1) : [xs[0]]
    .concat(deleted(x, xs.slice(1))) : [];
}