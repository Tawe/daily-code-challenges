type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let called = false
    return function (...args) {
        if (called) {
            return undefined
        }
        called = true
        return fn(...args)
    };
}

const fn = (a: number, b: number, c: number) => (a + b + c)
const onceFn = once(fn)
console.log(onceFn(1, 2, 3))
console.log(onceFn(2, 3, 6))