type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    const timeout = setTimeout(() => {
        fn(...args)
    }, t)
    return function() {
        clearTimeout(timeout)
    }
};

const result = []
const fn = (x) => x * 5
const args = [2], t = 20, cancelT = 50
const start = performance.now()
const log = (...argsArr) => {
  result.push(...argsArr)
  const diff = Math.floor(performance.now() - start)
  console.log(diff, result.join(", "))
}
const cancel = cancellable(log, args, t)
setTimeout(() => cancel(), cancelT)