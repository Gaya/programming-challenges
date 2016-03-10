/*
 Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical
 order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the
 list to obtain a name score.

 For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the
 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

 What is the total of all the name scores in the file?
 */

var fs = require('fs');

fs.readFile('./22-names-scores/names.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }

  var names = namesStringToArray(data.toString());
  var total = 0;

  names.forEach((name, index) => {
    var nrName = (index + 1);
    var letters = name.split('');
    var score = calcNameScore(letters);

    total = total + (score * nrName);
  });

  console.log(total);
});

function namesStringToArray(names) {
  return names.replace(/\"/g, '').split(',').sort();
}

function calcNameScore(letters) {
  var score = 0;

  letters.forEach((letter) => {
    score += calcLetterScore(letter);
  });

  return score;
}

function calcLetterScore(letter) {
  return letter.charCodeAt() - 64;
}