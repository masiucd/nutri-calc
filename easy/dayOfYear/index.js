/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = function(date) {
  const months = {
    1: 0,
    2: 31,
    3: 59,
    4: 90,
    5: 120,
    6: 151,
    7: 181,
    8: 212,
    9: 243,
    10: 273,
    11: 304,
    12: 334,
  };

  const [year, month, day] = date.split('-').map(Number);
  const isLeapYear =
    (year % 100 === 0 && year % 400 === 0) ||
    (year % 100 !== 0 && year % 4 === 0);

  const extraDay = isLeapYear && month >= 3 ? 1 : 0;

  console.log(isLeapYear);
  return months[month] + day + extraDay;
};

console.log(dayOfYear('2019-01-09')); // 9
console.log(dayOfYear('2003-03-01')); // 60
console.log(dayOfYear('2004-03-01')); // 61

// const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// const months = {
//   1: 30,
//   2: 28,
//   3: 31,
//   4: 31,
//   5: 30,
//   6: 31,
//   7: 30,
//   8: 31,
//   9: 30,
//   10: 31,
//   11: 30,
//   12: 31,
// };
// const months = {
//   january: 30,
//   february: 28,
//   mars: 31,
//   april: 31,
//   maj: 30,
//   june: 31,
//   july: 30,
//   august: 31,
//   september: 30,
//   october: 31,
//   november: 30,
//   december: 31,
// };
