/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const countBits = (n) => {
    let count = 0;
    while (n !== 0) {
      count += n & 1;
      n = n >> 1;
    }

    return count
  };

  arr.sort((a, b) => {
    let bitA = countBits(a);
    let bitB = countBits(b);

    if (bitA == bitB) {
      return a - b;
    } else {
      return bitA - bitB;
    }
  });

  return arr;
};
