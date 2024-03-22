/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {

    let map = new Map()

    for (let num of deck) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    const gcd = (a, b) => {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    };
    

    let size = 0;

    for (let value of map.values()) {
       size = gcd(size, value);

       if (size === 1) {

            return false;
        }
    }

    return true

    
};