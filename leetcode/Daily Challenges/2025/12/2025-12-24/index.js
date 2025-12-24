var minimumBoxes = function(apple, capacity) {
    let appleSumm = apple.reduce((a, b) => a + b, 0);
    const sortedCapacity = capacity.sort((a, b) => b- a);

    let count = 0;
    for (let i = 0; i < sortedCapacity.length && appleSumm > 0; i++) {
        appleSumm -= sortedCapacity[i];
        count++;
    }

    return count
};

const x = minimumBoxes([1,3,2], [4,3,1,5,2]);
x;