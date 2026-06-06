function leftRightDifference(nums: number[]): number[] {
    const total = nums.reduce((sum, x) => sum + x, 0);
    const answer = new Array<number>(nums.length);
    let left = 0;
    let right = total;

    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        answer[i] = Math.abs(left - right);
        left += nums[i];
    }

    return answer;
}

console.log(leftRightDifference([10, 4, 8, 3]));
console.log(leftRightDifference([1]));
