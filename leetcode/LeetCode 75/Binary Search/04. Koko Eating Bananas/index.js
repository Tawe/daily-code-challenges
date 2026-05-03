const minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canEatAll(piles, h, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

const canEatAll = function(piles, h, k) {
    let hours = 0;
    for (let pile of piles) {
        hours += Math.ceil(pile / k);
    }
    return hours <= h;
};

const x = minEatingSpeed([3,6,7,11], 8);
x;