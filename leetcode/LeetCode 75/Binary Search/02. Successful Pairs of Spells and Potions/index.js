const successfulPairs = function(spells, potions, success) {
    const m = potions.length;
    const result = new Array(spells.length).fill(0);

    potions.sort((a, b) => a - b);

    for (let i = 0; i < spells.length; i++) {
        const spell = spells[i];
        let left = 0;
        let right = m - 1;
        let firstValid = m;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const product = spell * potions[mid];

            if (product >= success) {
                firstValid = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result[i] = m - firstValid;
    }

    return result;
};

const x = successfulPairs([5,1,3], [1,2,3,4,5], 7)
x;