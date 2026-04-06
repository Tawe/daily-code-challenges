# 2026-04-05
[2026-04-05 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-05)

## Instructions
Digit Rotation Escape

Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.

A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.

- Check rotation `0` (the given number) first.
- Given numbers won't contain any zeros.
- Return the first rotation number if one is found, or `"none"` if not.

## My Thoughts

This is a direct rotation-and-check problem.

The idea is:

- convert the number to a string so rotations are easy
- for each possible rotation:
  - convert the current rotation back to a number
  - check if it is divisible by the digit count
  - if yes, return the current rotation index
- otherwise rotate by moving the first digit to the end and continue

Since there are only as many distinct rotations as digits, a simple loop is enough.

Time complexity: `O(d^2)` in the worst case, where `d` is the number of digits  
Space complexity: `O(d)`

## What I Learned

- String manipulation is often the simplest way to handle digit rotations.
- Problems that ask for the “first valid rotation” are a natural fit for sequential simulation.
- The digit count stays constant across all rotations, so it only needs to be determined once conceptually.
- When the search space is bounded by the number of digits, brute-force checking every rotation is perfectly reasonable.
