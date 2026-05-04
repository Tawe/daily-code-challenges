const combinationSum3 = function(k, n) {
    const result = [];
    const backtrack = (start, current, currentSum) => {
        if (currentSum > n) return;
        if (current.length === k) {
            if (currentSum === n) result.push([...current]);
            return;
        }
        for (let i = start; i <= 9; i++) {
            current.push(i);
            backtrack(i + 1, current, currentSum + i);
            current.pop();
        }
    };
    backtrack(1, [], 0);
    return result;
};

const x = combinationSum3(3, 7);
x;