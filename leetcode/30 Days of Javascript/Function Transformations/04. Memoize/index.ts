type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = new Map<string, number>()

    return function (...args: number[]): number {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)!
        }

        const result = fn(...args)
        cache.set(key, result)
        return result
    }
}


const fn = (a: number, b: number) => a + b
const memoizedFn = memoize(fn)
console.log(memoizedFn(2, 2))
console.log(memoizedFn(2, 2))