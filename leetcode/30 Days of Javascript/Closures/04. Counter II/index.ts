type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let current = init
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => {
            current = init
            return current
        }
    }
};

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())