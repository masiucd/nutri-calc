/* eslint-disable no-bitwise */
function dec2bin(n: number) {
  return (n >>> 0).toString(2);
}

function hammingDistance(x: number, y: number) {
  const bitX = dec2bin(x);
  const bitY = dec2bin(y);

  let xCount = 0;
  for (const val of bitX.split('')) {
    if (val === '0') xCount += 1;
  }

  let yCount = 0;
  for (const val of bitY.split('')) {
    if (val === '0') yCount += 1;
  }

  return Math.abs(yCount - xCount);
}

// console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 1));
