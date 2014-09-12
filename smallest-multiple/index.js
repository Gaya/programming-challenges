var found = false;
var i = 1;

while (found !== true) {
    var fail = false;

    for (var j = 1; j < 21; j++) {
        if (i % j !== 0) {
            fail = true;
            i++;
            break;
        }
    }

    if (fail === false) {
        found = true;
    }
}

console.log(i);