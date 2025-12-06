function countPartitions(nums, k) {
    const n = nums.length;
    const MOD = 1_000_000_007n;

    const dp = new Array(n + 1).fill(0n);
    const prefix = new Array(n + 1).fill(0n); 

    dp[0] = 1n;
    prefix[1] = 1n;

    const maxDeque = []; 
    const minDeque = [];

    let left = 0;

    for (let r = 0; r < n; r++) {
        const val = nums[r];

        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= val) {
            maxDeque.pop();
        }
        maxDeque.push(r);

        while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= val) {
            minDeque.pop();
        }
        minDeque.push(r);

        while (
            maxDeque.length &&
            minDeque.length &&
            nums[maxDeque[0]] - nums[minDeque[0]] > k
        ) {
            if (maxDeque[0] === left) maxDeque.shift();
            if (minDeque[0] === left) minDeque.shift();
            left++;
        }

        const ways =
            (prefix[r + 1] - prefix[left] + MOD) % MOD; // handle negative
        dp[r + 1] = ways;

        prefix[r + 2] = (prefix[r + 1] + dp[r + 1]) % MOD;
    }

    return Number(dp[n]);
}


const x = countPartitions([9,4,1,3,7], 4)