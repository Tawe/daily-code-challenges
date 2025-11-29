var minOperations = function(nums, k) {
    const sum = nums.reduce((partialSum, a) => partialSum + a, 0);
    return sum % k;  
};

const x = minOperations([3,2],6)    