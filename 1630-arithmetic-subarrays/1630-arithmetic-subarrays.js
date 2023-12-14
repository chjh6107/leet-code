/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = (nums, l, r) => {
    const res = [];

    for ( let i = 0; i < l.length; i++ ) {
        const sortedNums = [...nums.slice(l[i], r[i] + 1)].
            sort((a, b) => Number(a) - Number(b));
        const validator = sortedNums[1] - sortedNums[0];
        
        const result = sortedNums.every((_, j, arr) => {
            if ( j === sortedNums.length - 1 ) return true;
            return validator === arr[j + 1] - arr[j];
        });

        res.push(result);
    }

    return res;
};