function maxTotalValue(nums: number[], k: number): number {
    const maxVal = Math.max(...nums);
    const minVal = Math.min(...nums);
    return (maxVal - minVal) * k;
}

console.log(maxTotalValue([1, 3, 2], 2));   // 4
console.log(maxTotalValue([4, 2, 5, 1], 3)); // 12
