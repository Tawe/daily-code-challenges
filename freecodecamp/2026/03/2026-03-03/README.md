# 2026-03-03
[2026-03-03 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-03)

## Instructions
Perfect Cube Count
Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

- The lower number is not guaranteed to be the first argument.
- A number is a perfect cube if there exists an integer `n` where `n * n * n = number`.
  For example, `27` is a perfect cube because `3 * 3 * 3 = 27`.

## My Thoughts

The key part of this challenge is handling ranges in either order and making sure both positive and negative cubes are counted.

The solution starts by normalizing the range:

- `lo = min(a, b)`
- `hi = max(a, b)`

After that, it counts cubes in two passes:

- one loop for non-negative integers (`0, 1, 2, ...`) while `k^3 <= hi`
- one loop for negative integers (`-1, -2, -3, ...`) while `k^3 >= lo`

In each loop, we only increment the counter when `k^3` is inside `[lo, hi]`.

This approach is straightforward and avoids floating-point edge cases from cube roots. It also naturally includes `0` when it belongs in the interval.

Time complexity is about `O(cuberoot(max(|a|, |b|)))` and space complexity is `O(1)`.

## What I Learned

- Normalizing input bounds first keeps interval problems simple.
- Negative perfect cubes matter and should be handled explicitly.
- Iterating integer candidates can be safer than relying on floating-point root math for exact checks.
