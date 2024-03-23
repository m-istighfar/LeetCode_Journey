/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let totalSum = nums.reduce((a, b) => a + b, 0);

  let digitSum = 0;

  for (let num of nums) {
    if (num <= 9) {
      digitSum += num;
    } else {
      while (num > 0) {
        let digit = num % 10;
        digitSum += digit;
        num = Math.floor(num/10);
      }
    }
  }

  return Math.abs(totalSum - digitSum)
};
