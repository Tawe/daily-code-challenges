function minBitwiseArray(nums: number[]): number[] {
    const result: number[] = [];
    for (const target of nums) {
        if ((target & 1) === 0) {
            result.push(-1);
            continue;
        }

        let ans = -1;
        for (let x = 0; x < target; x++) {
            if ((x | (x + 1)) === target) {
                ans = x;
                break;
            }
        }
        result.push(ans);
    }
    return result;
}
  const x = minBitwiseArray([2,3,5,7])
  x;