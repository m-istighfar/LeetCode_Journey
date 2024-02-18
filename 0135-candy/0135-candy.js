/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candies = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1 ]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  let ans = 0;

  ans = candies.reduce((a, b) => a + b, 0);

  return ans;
};

console.log(candy([1, 0, 2]));
