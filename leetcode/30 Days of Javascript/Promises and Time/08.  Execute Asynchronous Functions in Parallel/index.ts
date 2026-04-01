type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return Promise.all(functions.map(fn => fn()))    .then(results => results)
    .catch(error => Promise.reject(error))
}

const functions = [() => new Promise(resolve => setTimeout(() => resolve(5), 200)), () => new Promise(resolve => setTimeout(() => resolve(10), 100))]
promiseAll(functions).then(console.log).catch(console.log)