/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums =>
    Math.max(...nums.join('').split('0').map(v => v.length))