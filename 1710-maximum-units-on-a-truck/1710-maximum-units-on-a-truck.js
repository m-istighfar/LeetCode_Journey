/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let ans = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize > 0) {
      if (truckSize >= boxTypes[i][0]) {
        ans += boxTypes[i][0] * boxTypes[i][1];

        truckSize -= boxTypes[i][0];
      } else {
        ans += truckSize * boxTypes[i][1];
        truckSize = 0;
      }
    } else break;
  }

  return ans;
};
