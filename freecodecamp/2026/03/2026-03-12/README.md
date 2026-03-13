# 2026-03-12
[2026-03-12 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-12)

## Instructions
Domino Chain Validator

Given a 2D array representing a sequence of dominoes, determine whether it forms a valid chain.

- Each element in the array represents a domino and will be an array of two numbers from 1 to 6, (inclusive).
- For the chain to be valid, the second number of each domino must match the first number of the next domino.
- The first number of the first domino and the last number of the last domino don't need to match anything.

## My Thoughts

This is a direct adjacent-pair validation problem.

For every domino except the last one, compare:

- current domino’s right value: `dominoes[i][1]`
- next domino’s left value: `dominoes[i + 1][0]`

If any pair doesn’t match, the chain is invalid immediately.  
If all adjacent pairs match, the chain is valid.

This early-return approach is simple and efficient.

Time complexity: `O(n)`  
Space complexity: `O(1)`

## What I Learned

- Chain/link validation problems usually reduce to checking neighboring elements.
- Early exit on first mismatch keeps the logic clean and avoids extra work.
- You only need to compare `n - 1` boundaries for a sequence of `n` dominoes.
