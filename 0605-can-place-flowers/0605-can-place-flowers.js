/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {


    if (flowerbed[i] == 0) {
      let left = i == 0 || flowerbed[i - 1] == 0;
      let right = flowerbed.length - 1 == i || flowerbed[i + 1] == 0;
      if (left && right) {
      count++;
      flowerbed[i] = 1;
    }
  }
    }

   

  return count >= n;
};