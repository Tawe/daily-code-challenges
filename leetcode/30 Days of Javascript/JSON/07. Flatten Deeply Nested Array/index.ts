type MultiDimensionalArray = (number | MultiDimensionalArray)[];

let flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    const result: MultiDimensionalArray = [];

    for (const val of arr) {
        if (Array.isArray(val) && n > 0) {
            const nested = flat(val, n - 1);
            for (const item of nested) {
                result.push(item);
            }
        } else {
            result.push(val);
        }
    }

    return result;
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]], 2));