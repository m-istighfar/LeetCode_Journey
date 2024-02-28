/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let strs2 = [...strs];
  let map = new Map();

  for (let i = 0; i < strs2.length; i++) {
    strs2[i] = strs2[i]
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
  }

  for (let i = 0; i < strs2.length; i++) {
    let curr = map.get(strs2[i]) || [];
    curr.push(strs[i]);

    map.set(strs2[i], curr);
  }

  let ans = [];
  for (const [key, value] of map) {
    ans.push(value);
  }

  return ans;
};
