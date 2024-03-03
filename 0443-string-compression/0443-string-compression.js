var compress = function (chars) {
  let curr = 1;
  let left = 0;

  for (let right = 1; right <= chars.length; right++) {
    if (right < chars.length && chars[right] == chars[right-1]) {
      curr++;
    } else {
      chars[left] = chars[right - 1];
      left++;

      if (curr > 1) {
        let currStr = curr.toString();
        for (let i = 0; i < currStr.length; i++) {
          chars[left] = currStr[i];
          left++;
        }

      }
    curr = 1;
    }
  }

  return left;
};
