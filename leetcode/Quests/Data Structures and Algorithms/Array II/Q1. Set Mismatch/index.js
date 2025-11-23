var findErrorNums = function(nums) {
    const freq = new Array(nums.length + 1).fill(0);
    
    for (const num of nums) {
        freq[num]++;
    }

    let dup = -1;
    let missing = -1;

    for (let i = 1; i <= nums.length; i++) {
        if (freq[i] === 2) dup = i;
        if (freq[i] === 0) missing = i;
    }

    return [dup, missing];
};


const x = findErrorNums([1,2,2,4]);
