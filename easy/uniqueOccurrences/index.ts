/* eslint-disable prefer-const */
const uniqueOccurrences = (arr: number[]): boolean => {
  let map: any = arr.reduce((acc: any, cur: any) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

  const values = Object.values(map);
  let res = new Set(values);
  console.log(values, res);
  return values.length === res.size;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
console.log(uniqueOccurrences([1, 2])); // false
