/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = n => Array.from({ length: n }, (_, i) => String(i + 1)).
        sort();