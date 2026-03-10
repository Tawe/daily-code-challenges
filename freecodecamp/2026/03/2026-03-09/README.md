# 2026-03-09
[2026-03-09 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-09)

## Instructions
Given an array of numbers, return the sum of all the numbers.

## My Thoughts

This is a straightforward aggregation problem.

In Python, the built-in `sum()` already does exactly what we need:

- it iterates through the array
- adds each value to an accumulator
- returns the total

So the cleanest implementation is just `return sum(numbers)`.

Time complexity: `O(n)`  
Space complexity: `O(1)` auxiliary space.

## What I Learned

- For basic reduction tasks, using language built-ins keeps solutions concise and readable.
- `sum()` is the idiomatic Python tool for totaling numeric iterables.
- Even simple problems are good reminders to prefer clear standard-library solutions over manual loops.
