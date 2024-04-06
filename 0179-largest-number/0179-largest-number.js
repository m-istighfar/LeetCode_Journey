/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const numStrs = nums.map(String);

  numStrs.sort((a, b) => {
    const order1 = a + b;
    const order2 = b + a;

    return order2 - order1;
  });
    

  if (numStrs[0] === "0") {
    return "0";
  }

  return numStrs.join("");
};

console.log(largestNumber([3, 30, 34, 5, 9]));
