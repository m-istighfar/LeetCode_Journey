/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let map1 = new Map();
  let map2 = new Map();
  let min = Infinity;
  let ans = [];

  let shorter = list1.length < list2.length ? list1 : list2;
  let longer = list1.length < list2.length ? list2 : list1;

 shorter.forEach((item, index) => map1.set(item, index));
 longer.forEach((item, index) => map2.set(item, index));

  for (let i = 0; i < longer.length; i++) {
    if (map1.has(longer[i])) {
      let sum = i + map1.get(longer[i]);
      if (min == sum) {
        ans.push(longer[i]);
      }
      if (sum < min) {
        ans = [longer[i]];
        min = sum
      }
    }
  }


  return ans;
};

