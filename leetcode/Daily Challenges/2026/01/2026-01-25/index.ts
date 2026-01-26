function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i]);
    }
    return minDiff;
}

const x = minimumDifference([9,4,1,7], 2);
x;