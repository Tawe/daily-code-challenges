type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    return arr.filter((n, i) => fn(n, i));
};

console.log(filter([1,2,3,4], (n) => n > 1));
