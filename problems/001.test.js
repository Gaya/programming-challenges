/**
 * Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function getMultiples(max = 10) {
  const results = [];
  for (let i = 0; i < max; i++) {
    const n = i + 1;
    if (n % 3 === 0 || n % 5 === 0) {
      results.push(n);
    }
  }
  return results;
}

function getSum(numbers = []) {
  return numbers.reduce((a, b) => a + b);
}

test('001', () => {
  expect(getMultiples(9)).toEqual([3, 5, 6, 9]);
  expect(getSum(getMultiples(9))).toEqual(23);
});

// outcome
console.log(getSum(getMultiples(999)));