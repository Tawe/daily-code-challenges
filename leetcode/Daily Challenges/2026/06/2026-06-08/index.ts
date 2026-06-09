function pivotArray(nums: number[], pivot: number): number[] {
    return [
        ...nums.filter((x) => x < pivot),
        ...nums.filter((x) => x === pivot),
        ...nums.filter((x) => x > pivot),
    ];
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); 
console.log(pivotArray([-3, 4, 3, 2], 2));
