function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  function isAlphaNumeric(c) {
    let code = c.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) ||
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122)
    );
  }

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;

    while (left < right && !isAlphaNumeric(s[right])) right--;

    if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
