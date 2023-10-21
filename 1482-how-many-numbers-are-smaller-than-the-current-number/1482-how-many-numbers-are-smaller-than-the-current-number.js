/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) =>
    nums.map(v => 
        nums.reduce((acc, curr) =>
        acc + (curr < v ? 1 : 0), 
        0)
    );