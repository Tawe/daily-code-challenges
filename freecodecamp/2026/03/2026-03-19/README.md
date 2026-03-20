# 2026-03-19
[2026-03-19 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-19)

## Instructions
Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

For example, given:

```js
[
  ["a", "b"],
  ["a", "a"]
]
```

Return:

```js
[
  ["b", "a"],
  ["b", "b"]
]
```

## My Thoughts

The matrix contains exactly two distinct values, so the clean approach is:

- scan the matrix once to identify those two values
- build a swap map like `{value1: value2, value2: value1}`
- scan again and replace each cell using that map

Your solution uses a `set` to collect the distinct values, which keeps the discovery step simple.

After that, the nested loop updates each cell in place, so every occurrence of the first value becomes the second, and vice versa.

Time complexity: `O(m * n)`  
Space complexity: `O(1)` auxiliary space, since the set/map only hold two values

## What I Learned

- When a problem guarantees only two unique values, a direct swap map is a simple and reliable pattern.
- Using a `set` is an easy way to discover distinct values without extra branching.
- In-place matrix updates are fine here because each replacement is looked up from a separate mapping, not from already-mutated neighbors.
- Breaking the task into “identify values” and “apply swap” keeps the logic clear.
