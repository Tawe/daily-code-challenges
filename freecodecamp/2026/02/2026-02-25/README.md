# 2026-02-25
[2026-02-25 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-25)

## Instructions
Sequential Difference
Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0].

## My Thoughts

I used a single `map` pass where each position computes the difference to the next element.

- If the current index is the last one, return `0`
- Otherwise return `arr[index + 1] - arr[index]`

This directly matches the problem statement and avoids extra loops or temporary structures.

Time complexity is `O(n)` because each element is processed once.  
Space complexity is `O(n)` for the returned array.

## What I Learned

- `map` works well when each output value depends on the current index.
- Boundary handling (the last element here) is the key detail in sequence problems.
- Keeping the transformation in one expression makes this kind of array challenge easy to read and verify.
