function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    return arr.map((n, i) => fn(n, i));
}

console.log(map([1, 2, 3], (n, i) => n + i));
console.log(map([1, 2, 3], (n) => n + 1));
console.log(map([1, 2, 3], () => 42));