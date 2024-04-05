/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const freqS = new Map();

  for (let char of s) {
    freqS.set(char, (freqS.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (freqS.has(char) && freqS.get(char) > 0) {
      freqS.set(char, freqS.get(char) - 1);
    }
  }

  let steps = 0;
  for (let [char, count] of freqS) {
    steps += count;
  }

  return steps;
};
