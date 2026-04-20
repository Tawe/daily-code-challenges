function doMath(str) {
    const numbers = str.match(/\d+/g) || [];
    if (numbers.length === 0) return 0;

    const separators = str.split(/\d+/).slice(1, -1);
    let result = Number(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
        const gapLen = separators[i - 1].length;
        const value = Number(numbers[i]);

        if (gapLen % 2 === 0) {
            result += value;
        } else {
            result -= value;
        }
    }
    return result;
}

console.log(doMath("3ab10c8"));