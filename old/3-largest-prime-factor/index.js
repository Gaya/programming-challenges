var find = 600851475143;
var answer = 0;

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

for (var i = 2; i < find; i++) {
    if (find % i === 0) {
        if (isPrime(find / i)) {
            answer = (find / i);
            break;
        }
    }
}

console.log(answer);