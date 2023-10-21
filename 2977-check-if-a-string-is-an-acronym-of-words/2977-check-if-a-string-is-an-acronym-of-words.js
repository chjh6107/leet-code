/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
const isAcronym = (words, s) => {
    const arr = s.split('');

    if(words.length !== arr.length) return false;

    return words.every((v, i) => v[0] === arr[i]);
};