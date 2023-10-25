const VOWELS = 'aeiouAEIOU'

const getCount = s => s.split('').reduce((acc, curr) => acc += VOWELS.includes(curr) ? 1 : 0, 0);

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
   const a = s.slice(0, s.length / 2);
   const b = s.slice(s.length / 2);

   return getCount(a) === getCount(b);
};