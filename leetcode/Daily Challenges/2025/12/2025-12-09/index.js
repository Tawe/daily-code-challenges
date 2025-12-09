    var specialTriplets = function(nums) {
        const MOD = 1_000_000_007;
        const MAX_VAL = 200000; 
        const n = nums.length;
        const left = new Array(MAX_VAL + 1).fill(0);
        const right = new Array(MAX_VAL + 1).fill(0);

        for (const x of nums) {
            right[x]++;
        }

        let ans = 0;

        for (let j = 0; j < n; j++) {
            const x = nums[j];
            right[x]--;

            const target = x * 2;
            if (target <= MAX_VAL) {
                const leftCount = left[target];
                const rightCount = right[target];

                if (leftCount > 0 && rightCount > 0) {
                    ans = (ans + (leftCount * rightCount) % MOD) % MOD;
                }
            }
        left[x]++;
        }

        return ans;

    };

const x = specialTriplets([8,4,2,8,4])
x;