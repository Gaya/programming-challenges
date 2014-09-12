var sum1 = 0;
var sum2 = 0;

for (var i = 1; i < 101; i++) {
    sum1 += Math.pow(i, 2);
    sum2 += i;
}
sum2 = Math.pow(sum2, 2);

console.log(sum1, sum2, (sum2 - sum1));