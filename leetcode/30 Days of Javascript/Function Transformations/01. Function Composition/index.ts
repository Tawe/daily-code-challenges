type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        let result = x;
        for (const fn of functions.reverse()) {
            result = fn(result);
        }
        return result;
    }
};

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4));