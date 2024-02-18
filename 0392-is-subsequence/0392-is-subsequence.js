/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let base = 0
    for (let i = 0; i < t.length; i++) {

        if (s[base] == t[i]) {
            base++
        }
    }

    return base == s.length
};
