# 2026-04-15
[2026-04-15 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-15)

## Instructions
Sorted Array Swap

Given an array of integers, return a new array using the following rules:

1. Sort the integers in ascending order
2. Then swap all values whose index is a multiple of 3 with the value before it.

## My Thoughts

This challenge has two separate steps, so the cleanest way to think about it is to do them in order. First, sort the numbers numerically in ascending order. Then, walk through the sorted array and apply the swap rule.

The JavaScript solution uses `sort((a, b) => a - b)` so the values are sorted as numbers instead of strings. After that, it loops through each index and checks whether the index is a multiple of `3`. Since index `0` does not have a value before it, the swap only happens when `i !== 0`.

For each valid index, the solution swaps `sortedArr[i]` with `sortedArr[i - 1]` using a temporary variable.

Time complexity: `O(n log n)` because of sorting  
Space complexity: `O(1)` extra space, not counting the array being returned

## What I Learned

- JavaScript's default `.sort()` compares values as strings, so numeric sorting needs `(a, b) => a - b`.
- Index-based rules are easier to implement after separating the transformation into clear phases.
- The `i !== 0` guard matters because the first element has no previous neighbor to swap with.
