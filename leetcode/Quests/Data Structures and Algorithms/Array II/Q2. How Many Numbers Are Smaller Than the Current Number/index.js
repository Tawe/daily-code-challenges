var smallerNumbersThanCurrent = function(nums) {
    const freq = new Array(101).fill(0);
    
    for (const num of nums) {
        freq[num]++;
    }
    
    for (let i = 1; i < 101; i++) {
        freq[i] += freq[i - 1];
    }
    
    const res = [];
    for (const num of nums) {
        res.push(num === 0 ? 0 : freq[num - 1]);
    }
    
    return res;
};

const x = smallerNumbersThanCurrent([6,5,4,8])