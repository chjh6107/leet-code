function removeDuplicates(nums: number[]): number {
    let pointer = 0;

    while (pointer < nums.length)
        nums[pointer] === nums[pointer + 1] ? nums.splice(pointer + 1, 1) : pointer++;

    return nums.length;
}
