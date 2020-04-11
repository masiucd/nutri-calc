/* eslint-disable prefer-const */
function numberOfStepsRec(n: number): number {
  // if even divide by 2
  // if odd then sutract by one and then divide by 2
  // count how many steps it takes to go down to 0
  if (n === 0) return n;

  return n % 2 === 0
    ? 1 + numberOfStepsRec(n / 2)
    : numberOfStepsRec((n - 1) / 2);
  // return 0;
}

function numberOfSteps(n: number): number {
  // if even divide by 2
  // if odd then sutract by one and then divide by 2
  // count how many steps it takes to go down to 0
  let c = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
      c += 1;
    } else {
      n--;
      c += 1;
    }
  }

  return c;
}

// console.log(numberOfSteps(8)); // 4
// console.log(numberOfSteps(14)); // 6
console.log(numberOfStepsRec(14)); // 6
console.log(numberOfStepsRec(8)); // 4
