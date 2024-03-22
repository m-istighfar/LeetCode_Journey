var equalFrequency = function (word) {
  let map = new Map();

  for (const char of word) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  if (map.size <= 1) return true;

  for (const [char, freq] of map) {
    map.set(char, freq - 1);

    let frequencies = new Set(map.values());
    frequencies.delete(0);

    map.set(char, freq);

    if (frequencies.size === 1) return true;
  }

  return false;
};