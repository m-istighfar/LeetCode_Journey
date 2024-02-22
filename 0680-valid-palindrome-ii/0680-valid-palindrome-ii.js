var validPalindrome = function (s) {
  
  function isPalindromeRange(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindromeRange(left + 1, right) || isPalindromeRange(left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};
