/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = new Map([["}","{"], [")", "("], ["]", "["]])
  let stack = [];
                    
  for (let char of s) {
      if (map.has(char)) {
           if (stack.pop() !== map.get(char)) {return false}
      } else {
         stack.push(char)
      }
  }

    
  return stack.length == 0


};
