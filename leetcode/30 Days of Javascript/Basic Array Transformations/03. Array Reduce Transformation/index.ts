type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    return nums.reduce((acc, curr) => fn(acc, curr), init);
};

console.log(reduce([1,2,3,4], (acc, curr) => acc + curr, 0));