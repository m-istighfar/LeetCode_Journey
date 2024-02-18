/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  console.log(candies);

  let sortC = [...candies];

  sortC.sort((a, b) => a - b);
  let max = sortC[candies.length - 1];

  let ans = [];

  for (let i = 0; i < candies.length; i++) {
   
    if (candies[i] + extraCandies >= max) {
      ans.push(true);
    } else ans.push(false);
  }

  return ans;
};


