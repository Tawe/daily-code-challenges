# 2026-01-28
[2026-01-28 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-28)

## Instructions

Flatten the Array
Given an array that contains nested arrays, return a new array with all values flattened into a single, one-dimensional array. Retain the original order of the items in the arrays.

## My Thoughts

This problem is really about recognizing a recursive structure. A nested array is just an array that may contain more arrays, which themselves may contain more arrays, and so on. Once I framed it that way, recursion became the obvious tool. The key decision point is simple: •	If the current item is a list, flatten it and merge the result. •	If it’s not a list, it’s already a value that belongs in the final output. Using extend instead of append for nested results was important. Since flatten(item) already returns a list, extend merges the elements instead of nesting them again. I also liked that this solution preserves the original order naturally, the recursion processes elements left to right, so no extra logic is needed to maintain order. Overall, this felt like a classic example of letting the structure of the data guide the solution instead of forcing iteration tricks.

## What I Learned

- Nested arrays are a natural fit for recursion.
- Every recursive solution needs:
- A base case (non-list items)
- A recursive case (lists that need flattening)
- extend() is the right tool when merging lists; append() would create unwanted nesting.
- Recursion can produce very readable solutions when the problem is inherently hierarchical.
- Preserving order often comes “for free” when recursion follows the input structure.
- This solution is optimal in both clarity and time complexity for typical interview-style flatten problems. If you ever want to explore alternatives later, you could try:
- An iterative stack-based version
- A generator-based approach using yield
