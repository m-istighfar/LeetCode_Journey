/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num == 0) {
    return "Zero";
  }

  let underTwenty = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  let tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  let thousand = ["", "Thousand", "Million", "Billion"];

  const toWords = (n) => {
    if (n === 0) return "";
    else if (n < 20) {
      return underTwenty[n] + " ";
    } else if (n < 100) {
      return tens[Math.floor(n / 10)] + " " + toWords(n % 10);
    } else
      return underTwenty[Math.floor(n / 100)] + " Hundred " + toWords(n % 100);
  };

  let output = "",
    i = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      output = toWords(num % 1000) + thousand[i] + " " + output;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return output.trim();
};
