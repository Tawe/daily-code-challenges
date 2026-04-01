# 2026-03-28
[2026-03-28 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-28)

## Instructions
Pascal's Triangle Row

Given an integer `n`, return the `n`th row of Pascal's triangle as an array.

In Pascal's Triangle, each row begins and ends with 1, and each interior value is the sum of the two values directly above it.

Here's the first 5 rows of the triangle:

```js
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

## My Thoughts

Instead of building the whole triangle, this solution generates only the target row directly.

The key observation is that Pascal row values follow the binomial-coefficient pattern, so each next value can be derived from the previous one:

- start with `1`
- compute the next element from the current one using:
  - `next = current * (n - i) // i`

That lets the row be built left to right in a single pass without storing earlier rows.

This is much more efficient than constructing the entire triangle up to row `n`.

Time complexity: `O(n)`  
Space complexity: `O(n)` for the returned row

## What I Learned

- Pascal’s Triangle rows can be generated directly from combinatorics, not just from the row above.
- Using the relationship between consecutive binomial coefficients avoids unnecessary work.
- Integer division works cleanly here because each coefficient formula stays exact.
- When only one row is needed, building the full triangle is wasted effort.
