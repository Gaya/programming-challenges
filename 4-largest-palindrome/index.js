function isPalindrome(number) {
    number = number.toString();

    if (number.length > 1) {
        var div = Math.floor(number.length / 2);
        return number.substr(0, div) === reverseInt(number.substr((div * -1), div));
    } else {
        return true;
    }
}

function reverseInt(n) {
    return n.toString().split("").reverse().join("");
}

function sortNumber(a, b) {
    return a - b;
}

var found = [];
var x = 999;
var y = 999;

while (y > 99) {
    if (isPalindrome((x * y))) {
        found.push((x * y));
    }

    x--;
    if (x.toString().length === 2) {
        x = 999;
        y--;
    }
}

found.sort(sortNumber);

console.log(found.slice(-1).pop());