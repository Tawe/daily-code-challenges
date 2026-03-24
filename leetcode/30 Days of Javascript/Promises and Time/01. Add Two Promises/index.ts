type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const [value1, value2] = await Promise.all([promise1, promise2])
    return value1 + value2
};

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(promise1, promise2).then(console.log)