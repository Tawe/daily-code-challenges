var smallestRepunitDivByK = function(k) {
    let r = 0;
    for (let length = 1; length <= k; length++) {
        r = (r * 10 + 1) % k;
        if (r === 0) return length;
    }
    return -1;
};

const x = smallestRepunitDivByK(3);
x;