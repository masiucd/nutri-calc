/* eslint-disable prefer-const */
/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecordX = function(s) {
  const recordList = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    recordList[s[i]] = (recordList[s[i]] || 0) + 1;
    if (recordList.A > 1) return false;
    if (s[i] === 'L') {
      count += 1;
      if (count > 2) return false;
    }
  }
  console.log(recordList);
  return true;
};
/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function(s) {
  let aBool = false;
  let lBool = false;
  let countA = 0;
  const sArr = s.split('');

  for (let i = 0; i < sArr.length; i += 1) {
    const char = sArr[i];

    if (char === 'A') countA += 1;
    if (char === 'L' && sArr[i + 1] === 'L' && sArr[i + 2] === 'L')
      lBool = true;
  }

  if (countA > 1) aBool = true;
  if (aBool || lBool) return false;
  return true;
};
console.log(checkRecord('PPALLP'));
console.log(checkRecord('LALL'));
/**
 * You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
 */
