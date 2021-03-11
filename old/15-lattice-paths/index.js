/*
 Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly
 6 routes to the bottom right corner.

 How many such routes are there through a 20×20 grid?
 */

function routesInGrid(x, y) {
    var n = x + y;
    var k = x;
    var coeff = 1;
    var i;

    for (i = n-k+1; i <= n; i++) coeff *= i;
    for (i = 1;     i <= k; i++) coeff /= i;

    return Math.round(coeff);
}

console.log(routesInGrid(1, 1));
console.log(routesInGrid(2, 2));
console.log(routesInGrid(3, 3));
console.log(routesInGrid(20, 20));