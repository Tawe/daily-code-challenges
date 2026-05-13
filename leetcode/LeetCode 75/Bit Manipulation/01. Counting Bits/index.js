const countBits = function(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(i.toString(2).split('1').length - 1);
    }
    return result;
};

const x = countBits(2)
x;