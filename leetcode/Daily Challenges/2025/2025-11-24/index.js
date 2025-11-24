var prefixesDivBy5 = function(nums) {
    let binaryForm= "";
    let outputArr = []
    for(let i = 0; i < nums.length; i++){
        binaryForm = (binaryForm * 2 + nums[i]) % 5
        outputArr.push(binaryForm === 0)
    }
    return outputArr
};

const x = prefixesDivBy5([0,1,1])
x;