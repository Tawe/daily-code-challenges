type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const byId = new Map<number, ArrayType>();

    for (const item of arr1) {
        byId.set(item.id, { ...item });
    }
    for (const item of arr2) {
        const prev = byId.get(item.id);
        byId.set(item.id, prev ? { ...prev, ...item } : { ...item });
    }

    return Array.from(byId.values()).sort((a, b) => a.id - b.id);
};

const arr1 = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
];
const arr2 = [
    { id: 2, value: "c" },
    { id: 3, value: "d" },
];

console.log(join(arr1, arr2));