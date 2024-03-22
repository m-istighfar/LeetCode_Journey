/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(" ");
    const sortedWords = [];

    for (const word of words) {
        const index = parseInt(word[word.length - 1]) - 1;
        const sortedWord = word.slice(0, -1);
        sortedWords[index] = sortedWord;
    }

    return sortedWords.join(" ");
};
