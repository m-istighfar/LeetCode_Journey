/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = s.split("");
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let left = 0,
    right = arr.length - 1;
  baseLeft = null;
  baseRight = null;

  while (left < right) {
    if (vowel.includes(arr[left])) {
      baseLeft = left;
    } else {
      left++;
    }

    if (vowel.includes(arr[right])) {
      baseRight = right;
    } else {
      right--;
    }

    if (baseRight != null && baseLeft != null) {
      let temp = arr[baseLeft];
      arr[baseLeft] = arr[baseRight];
      arr[baseRight] = temp;
      baseLeft = null;
      baseRight = null;
      left++;
      right--;
    }
  }

  return arr.join("");
};

console.log(reverseVowels("hello"));
