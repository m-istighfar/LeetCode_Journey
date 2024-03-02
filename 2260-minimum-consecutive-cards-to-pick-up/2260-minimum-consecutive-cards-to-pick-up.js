/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  let map = new Map();

  let left = 0;
  let ans = Infinity
  let curr = 0;

  for (let right = 0; right < cards.length; right++) {
    if (map.has(cards[right])) {
      left = map.get(cards[right]);
      ans = Math.min(ans, right - left + 1);
      
    } 
      map.set(cards[right], right);
   
  }

  return (ans == Infinity )? -1 : ans
};
