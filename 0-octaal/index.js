function toOctal(number) {
    return (Math.floor(number / 7) * 10) + ((number % 7) - Math.floor(number / 7));
}

console.log(toOctal(8) === 10);
console.log(toOctal(9) === 11);
console.log(toOctal(16) === 20);
console.log(toOctal(17) === 21);
console.log(toOctal(24) === 30);