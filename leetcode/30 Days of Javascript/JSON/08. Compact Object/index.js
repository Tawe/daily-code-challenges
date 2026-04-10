/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
let compactObject = function (obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (Array.isArray(obj)) {
        const out = [];
        for (const x of obj) {
            const v = compactObject(x);
            if (Boolean(v)) {
                out.push(v);
            }
        }
        return out;
    }

    const out = {};
    for (const key of Object.keys(obj)) {
        const v = compactObject(obj[key]);
        if (Boolean(v)) {
            out[key] = v;
        }
    }
    return out;
};

console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({"a": null, "b": [false, 1]}));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));