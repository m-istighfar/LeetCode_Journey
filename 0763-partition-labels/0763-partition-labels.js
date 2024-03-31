/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const lastIndexes = {};
  for (let i = 0; i < s.length; i++) {
    lastIndexes[s[i]] = i;
  }

  let currentLastIndex = -1;
  let currentPartition = 0;
  let partitions = [];

  for (let i = 0; i < s.length; i++) {
    currentLastIndex = Math.max(currentLastIndex, lastIndexes[s[i]]);
    currentPartition++;

    if (i === currentLastIndex) {
      partitions.push(currentPartition);
      currentPartition = 0;
    }
  }

  return partitions;
};