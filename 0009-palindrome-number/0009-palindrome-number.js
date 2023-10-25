/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    const s = String(x);
    return s.split('').every((v, i) => v === s[s.length - i - 1]);
};