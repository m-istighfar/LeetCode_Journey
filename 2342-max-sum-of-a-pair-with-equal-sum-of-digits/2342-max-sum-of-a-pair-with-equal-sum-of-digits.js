/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let map = new Map();

  let ans = -Infinity;
  const sumDigit = (n) => {
    let sum = 0;
    let digit;
    while (n > 0) {
      digit = n % 10;
      sum += digit;
      n = Math.floor(n / 10);
    }

    return sum;
  };

  for (const num of nums) {
    if (map.has(sumDigit(num))) {
      ans = Math.max(ans, num + map.get(sumDigit(num)));
      if (num > map.get(sumDigit(num))) {
        map.set(sumDigit(num), num);
      } else {
        map.set(sumDigit(num), map.get(sumDigit(num)));
      }
    } else {
      map.set(sumDigit(num), num);
    }
  }

  return ans == -Infinity ? -1 : ans;
};
