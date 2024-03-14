var numSubarraysWithSum = function (nums, goal) {
  let sumCounts = new Map();
  sumCounts.set(0, 1);
  let currSum = 0;
  let ans = 0;

  for (let num of nums) {
    currSum += num;

    ans += sumCounts.get(currSum - goal) || 0;

    sumCounts.set(currSum, (sumCounts.get(currSum) || 0) + 1);
  }

  return ans;
};
