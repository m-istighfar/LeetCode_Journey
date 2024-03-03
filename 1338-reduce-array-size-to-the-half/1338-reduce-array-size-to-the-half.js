/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  let map = new Map();

  for (const nums of arr) {
    map.set(nums, (map.get(nums) || 0) + 1);
  }


  let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));


  let ans = 0;
  let maxLength = arr.length;

  for (const values of sortedMap.values()) {
      maxLength -= values
      ans++
      if(maxLength <= arr.length/2) break;
  }

  return ans
};
