const minFlips = function(a, b, c) {
    let flips = 0;
    while (a > 0 || b > 0 || c > 0) {
        const ab = (a & 1) | (b & 1);
        const cbit = c & 1;
        if (ab !== cbit) {
            flips += cbit === 1 ? 1 : (a & 1) + (b & 1);
        }
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    return flips;
};

const x = minFlips(2, 6, 5);
x;