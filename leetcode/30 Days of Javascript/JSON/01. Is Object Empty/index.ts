type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    return Object.keys(obj).length === 0;
};


const obj: Obj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(isEmpty(obj))