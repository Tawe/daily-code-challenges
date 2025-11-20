var findFinalValue = function(nums, original) {
    const set = new Set(nums);
    let current = original;

    while (set.has(current)) {
        current *= 2;
    }

    return current;
}
const x = findFinalValue([5,3,6,1,12], 3);