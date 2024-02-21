var findTheDifference = function(s, t) {
    const charCount = new Array(26).fill(0); 

    for (const char of s) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (const char of t) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        if (charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
            return char;
        }
    }

    return "";
};
