function buildArray(target: number[], n: number): string[] {
    const stack: string[] = [];
    for (let i = 1; i <= target[target.length - 1]; i++) {
        stack.push("Push");
        if (target.indexOf(i) === -1) {
            stack.push("Pop");
        } 
    }
    return stack
};

const x = buildArray([1,3], 3);
x;
