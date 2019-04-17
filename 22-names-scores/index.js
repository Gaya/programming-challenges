/*
 Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical
 order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the
 list to obtain a name score.

 For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the
 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

 What is the total of all the name scores in the file?
 */

const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'names.txt'), (err, data) => {
  if (err) {
    return console.error(err);
  }

  const total = data
    .toString()
    .replace(/"/g, '')
    .split(',')
    .sort()
    .reduce(
      (acc, name, index) =>
        acc + (
          name
            .split('')
            .reduce(
              (acc, letter) => acc + (letter.charCodeAt(0) - 64),
              0,
            )
          * (index + 1)
        ),
      0,
    );

  console.log(total);
});
