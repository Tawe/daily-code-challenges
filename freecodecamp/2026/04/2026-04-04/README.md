# 2026-04-04
[2026-04-04 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-04)

## Instructions
Equation Validation

Given a string representing a math equation, determine whether it is correct.

- The left side may contain up to three positive integers and the operators `+`, `-`, `*`, and `/`.
- The equation will be given in the format: `"number operator number = number"` (with two or three numbers on the left). For example: `"2 + 2 = 4"` or `"2 + 3 - 1 = 4"`.
- The right side will always be a single integer.

Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.

## My Thoughts

This problem is really a tiny expression parser plus a comparison.

The solution breaks it into three steps:

- split the equation into left side and right side
- parse the left side into numbers and operators
- evaluate the left side using normal operator precedence, then compare to the right side

For evaluation, your code uses two passes:

- first resolve all `*` and `/` from left to right
- then resolve the remaining `+` and `-`

That keeps the logic simple without needing a full parser or `eval`.

Using `Math.trunc(a / b)` also makes the division behavior explicit.

Time complexity: `O(n)` for the small token list  
Space complexity: `O(n)`

## What I Learned

- Even simple calculator-style problems benefit from separating parsing from evaluation.
- Operator precedence can often be handled cleanly with staged passes instead of a full expression tree.
- Avoiding `eval` keeps the solution safer and easier to reason about.
- Converting the equation into tokens first makes validation of malformed input much easier.
