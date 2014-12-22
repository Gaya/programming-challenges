/*
 If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19
 letters used in total.

 If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

 NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115
 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with
 British usage.
 */
var numberStrings = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hunderd",
    1000: "thousand"
};

for (var i = 1; i <= 1000; i++) {
    var number = "";
    var last = popDigits(i, 2);

    var hunderds = (Math.floor(i / 100));
    if (hunderds > 0 && hunderds < 10) {
        number += numberStrings[hunderds] + " " + numberStrings[100];
    } else if (hunderds >= 10) {
        number += numberStrings[1] + " " + numberStrings[1000];
    }

    if (last < 20 && last > 0) {
        if (hunderds > 0 && hunderds < 10) {
            number += " and ";
        }

        number += numberStrings[last];
    } else if (last > 0) {
        lastDig = popDigits(i, 1);

        if (hunderds > 0 && hunderds < 10) {
            number += " and ";
        }

        number += numberStrings[(Math.floor(last / 10) * 10)];

        if (lastDig > 0) {
            number += " " + numberStrings[lastDig];
        }
    }

    console.log(number);
}

function popDigits(input, length) {
    var number = input.toString();
    return parseInt(number.substr((length * -1)));
}