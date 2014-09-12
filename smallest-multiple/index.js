var found = false;
var i = 1;

while (found !== true) {
    var fail = false;

    for (var j = 1; j < 21 && fail !== true; j++) {
        if (i % j !== 0) {
            fail = true;
        }
    }

    if (fail === false) {
        found = true;
    } else {
        i++;
    }
}

console.log(i);