type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    arr.sort((a, b) => {
        return fn(a) - fn(b);
    });
    return arr;
}

const ourArry: JSONValue[] = [[3, 4], [5, 2], [10, 1]];
const fn: Fn = (x: JSONValue) => {
    if (Array.isArray(x) && typeof x[1] === "number") {
        return x[1];
    }
    return 0;
};
console.log(sortBy(ourArry, fn));