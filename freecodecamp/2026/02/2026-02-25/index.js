function findDifferences(arr) {
    return arr.map((num, index) => {
        if (index === arr.length - 1) {
            return 0;
        }
        return arr[index + 1] - num;
    });
}

const x = findDifferences([1, 2, 4, 7]);
x;