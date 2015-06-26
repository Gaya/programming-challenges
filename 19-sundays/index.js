/*
 You are given the following information, but you may prefer to do some research for yourself.

 1 Jan 1900 was a Monday.
 Thirty days has September,
 April, June and November.
 All the rest have thirty-one,
 Saving February alone,
 Which has twenty-eight, rain or shine.
 And on leap years, twenty-nine.
 A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

 How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

var daysInWeek = 7;

function daysInMonth(month, year) {
  if (month === 2) {
    if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
      return 27;
    }

    return 28;
  }

  if ([4, 6, 9, 11].indexOf(month) > -1) {
    return 30;
  }

  return 31;
}

function countSundaysOnFirstOfMonth(startMonth, startYear, endMonth, endYear) {
  var day = 1;
  var month = 1;
  var year = 1900;
  var weekday = 1;
  var sundayCount = 0;
  var startCounting = false;

  var endDay = daysInMonth(endMonth, endYear);

  while (!(day === endDay && month === endMonth && year === endYear)) {
    if ((year === startYear && month >= startMonth) || (year > startYear)) {
      startCounting = true;
    }

    if (startCounting && (weekday === 7 && day === 1)) {
      sundayCount++;
    }

    //increase weekday
    if (weekday === 7) {
      weekday = 1;
    } else {
      weekday++;
    }

    //increase day
    if (day === daysInMonth(month, year)) {
      day = 1;

      //increase month
      if (month == 12) {
        month = 1;

        //increase year
        year++;
      } else {
        month++;
      }
    } else {
      day++;
    }
  }

  return sundayCount;
}

console.log(countSundaysOnFirstOfMonth(1, 1901, 12, 2000));