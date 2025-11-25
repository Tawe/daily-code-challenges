var smallestRepunitDivByK = function(k) {
    let num = ""
    if(k % 2 === 0 || k % 5 === 0){
        return -1
    }
    for (let length = 1; length <= k; length++) {
        num = num+1;
        if(k % num === 0){
            num;
            return true
        }
    }
    
};

const x = smallestRepunitDivByK(2);
x;