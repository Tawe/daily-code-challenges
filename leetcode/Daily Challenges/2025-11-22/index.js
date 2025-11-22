var minimumOperations = function(nums) {
    return nums.reduce((acc, num) => acc + (num % 3 === 0 ? 0 : 1), 0);
};


const x = minimumOperations([3,6,9])