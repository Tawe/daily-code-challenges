# 2026-03-14
[2026-03-14 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-14)

## Instructions
Pi Day
Happy pi (π) day!

Given an integer (`n`), where `n` is between 1 and 1000 (inclusive), return the `n`th decimal of π.

- Make sure to return a number not a string.

π with its first five decimals is 3.14159. So given `5` for example, return `9`, the fifth decimal.

You may have to find the first 1000 decimals of π somewhere.

## My Thoughts

Given the constraint (`1 <= n <= 1000`), a practical solution is to store π as a string with enough decimal digits and index directly into it.

Since the string starts as `"3."`, the `n`th decimal is at index `n + 1`.

So the implementation is:

- keep a constant string containing π to at least 1000 decimals
- read the character at `pi[n + 1]`
- convert it to an integer before returning

This keeps the logic simple and avoids floating-point precision issues.

Time complexity: `O(1)`  
Space complexity: `O(1)` extra space (besides the stored constant string)

## What I Learned

- For bounded lookup problems, precomputed constants can be cleaner than runtime computation.
- String indexing is a reliable way to extract a specific decimal digit.
- Floating-point types are not suitable for exact high-precision decimal digit access.
- Offsets matter: because π is stored as `"3.xxx..."`, decimal position `n` maps to index `n + 1`.
