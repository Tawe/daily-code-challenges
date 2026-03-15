function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    for (const token of tokens) {
        if (token === "+") {
            const b = stack.pop()!
            const a = stack.pop()!
            stack.push(a + b)
        } else if (token === "-") {
            const b = stack.pop()!
            const a = stack.pop()!
            stack.push(a - b)
        } else if (token === "*") {
            const b = stack.pop()!
            const a = stack.pop()!
            stack.push(a * b)
        } else if (token === "/") {
            const b = stack.pop()!
            const a = stack.pop()!
            stack.push(Math.trunc(a / b))
        } else {
            stack.push(Number(token))
        }
    }
    return stack.pop()!
}

// Examples
console.log(evalRPN(["2", "1", "+", "3", "*"]))           // 9
console.log(evalRPN(["4", "13", "5", "/", "+"]))         // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])) // 22