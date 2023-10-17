const runningSum = (nums: number[]): number[] => 
    nums.reduce((acc, curr, i) => [...acc, curr + (i === 0 ? 0 : acc[i - 1])], []);