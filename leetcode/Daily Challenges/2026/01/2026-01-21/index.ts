function minBitwiseArray(nums: number[]): number[] {
    const ans: number[] = [];

    for (const p of nums) {
        if ((p & 1) === 0) {
            ans.push(-1);
            continue;
        }

        let tmp = p;
        let cnt = 0;
        while ((tmp & 1) === 1) {
            cnt++;
            tmp >>= 1;
        }

        const t = cnt - 1;
        ans.push(p - (1 << t));
    }

    return ans;
}

const x = minBitwiseArray([2,3,5,7]);
x;