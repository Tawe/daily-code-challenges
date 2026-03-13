var findDisappearedNumbers = function(nums) {
    const freq = new Array(nums.length + 1).fill(0);
    for (const num of nums) {
        freq[num]++;
    }
   
    const res = [];
    for (let i = 1; i <= nums.length; i++) {
        if (freq[i] === 0) res.push(i);
    }
    return res;
};

const x = findDisappearedNumbers([4,3,2,7,8,2,3,1]);
x;