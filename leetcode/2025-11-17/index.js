var kLengthApart = function(nums, k) {
    let distance = Infinity; // means "no previous 1 yet"

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (distance < k) {
                return false;
            }
            distance = 0;
        } else {
            distance++;
        }
    }

    return true;
};

const x = kLengthApart([1,0,0,0,1,0,0,1], 2)
x;