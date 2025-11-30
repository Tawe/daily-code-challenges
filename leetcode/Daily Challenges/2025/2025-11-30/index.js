var minSubarray = function(nums, p) {
    const n = nums.length;
    let total = 0;
    for (const x of nums) total += x;

    const rem = total % p;
    if (rem === 0) return 0; 

    const map = new Map();
    map.set(0, 0); 
    
    let ans = n;
    let prefix = 0;

    for (let i = 0; i < n; i++) {
        prefix = (prefix + nums[i]) % p;

        const needed = (prefix - rem + p) % p;
        if (map.has(needed)) {
            const j = map.get(needed);
            ans = Math.min(ans, i + 1 - j);
        }

        map.set(prefix, i + 1);
    }

    return ans === n ? -1 : ans; 
};



const x = minSubarray([6,3,5,2], 9)
x;