type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length;
};

console.log(argumentsLength(5));
console.log(argumentsLength({}, null, "3"));