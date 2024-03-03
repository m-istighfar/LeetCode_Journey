/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);

  console.log(people);

  let left = 0;
  let right = people.length - 1;
  let ans = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      ans++;
      left++;
      right--;
    } else if (people[left] + people[right] > limit) {
      ans++;
      right--;
    }
  }

  return ans;
};
