function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    
    let maxSum = 0;
    const n = nums.length;
    
    for (let i = 0; i < n / 2; i++) {
        const pairSum = nums[i] + nums[n - 1 - i];
        maxSum = Math.max(maxSum, pairSum);
    }
    
    return maxSum;
}

const x = minPairSum([3,5,2,3]);
x;

