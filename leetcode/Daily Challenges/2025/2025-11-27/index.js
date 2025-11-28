var maxSubarraySum = function(nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1);
    prefix[0] = 0;

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    const minPrefix = new Array(k).fill(Infinity);
    minPrefix[0] = 0; 

    let ans = -Infinity;
    for (let j = 1; j <= n; j++) {
        const r = j % k;

       if (minPrefix[r] !== Infinity) {
            const candidate = prefix[j] - minPrefix[r];
            if (candidate > ans) ans = candidate;
        }

        if (prefix[j] < minPrefix[r]) {
            minPrefix[r] = prefix[j];
        }
    }

    return ans;
};


const x = maxSubarraySum([-5,1,2,-3,4], 2)
x;