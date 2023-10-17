const shuffle = (nums: number[], n: number): number[] => {
    const arr = [];

    Array.from({ length: n }).forEach((_, i) => {
        arr.push(nums[i]);
        arr.push(nums[i + n])
    })
    
    return arr;
};