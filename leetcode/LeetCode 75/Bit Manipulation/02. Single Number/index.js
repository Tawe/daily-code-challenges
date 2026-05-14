const singleNumber = function(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
};

const x = singleNumber([2,2,1]);
x;