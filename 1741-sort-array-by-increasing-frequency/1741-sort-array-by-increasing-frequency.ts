const frequencySort = (nums: number[]): number[] => {
    const map = {};
    nums.forEach(v => map[v] ? map[v]++ : map[v] = 1)
    
    return nums.sort((a, b) => {
        if(map[a] === map[b]) return b - a
        return map[a] - map[b]
    })
};