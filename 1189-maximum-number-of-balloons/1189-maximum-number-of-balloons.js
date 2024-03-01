var maxNumberOfBalloons = function(text) {
  let map = new Map();

  for (const s of text) {
    map.set(s, (map.get(s) || 0) + 1);
  }


  return Math.floor(
    Math.min(
      map.get("b") || 0,
      map.get("a") || 0,
      (map.get("l") || 0) / 2,
      (map.get("o") || 0) / 2,
      map.get("n") || 0
    )
  );
};
