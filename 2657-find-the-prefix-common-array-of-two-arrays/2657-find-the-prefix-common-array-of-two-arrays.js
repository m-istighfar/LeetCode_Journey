/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length;

  const seenA = new Set();
  const seenB = new Set();

  const commonNumbers = new Set();

  const C = [];
  let commonCount = 0;

  for (let i = 0; i < n; i++) {
    seenA.add(A[i]);
    seenB.add(B[i]);

    if (seenB.has(A[i])) {
      commonNumbers.add(A[i]);
    }

    if (seenA.has(B[i])) {
      commonNumbers.add(B[i]);
    }

    commonCount = commonNumbers.size;

    C.push(commonCount);
  }

  return C;
};
