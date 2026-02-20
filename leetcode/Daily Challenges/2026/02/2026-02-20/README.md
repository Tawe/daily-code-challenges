# 2026-02-20

## Instructions
Special binary strings are binary strings with the following two properties:

The number of 0's is equal to the number of 1's.
Every prefix of the binary string has at least as many 1's as 0's.
You are given a special binary string s.

A move consists of choosing two consecutive, non-empty, special substrings of s, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.

Return the lexicographically largest resulting string possible after applying the mentioned operations on the string.

```
Example 1:
Input: s = "11011000"
Output: "11100100"
Explanation: The strings "10" [occuring at s[1]] and "1100" [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.

Example 2:
Input: s = "10"
Output: "10"
```

Constraints:

1 <= s.length <= 50
s[i] is either '0' or '1'.
s is a special binary string.

## My Thoughts

The key insight is to split the string into top-level special blocks, solve each block recursively, then reorder blocks for maximum lexicographic order.

- Use a balance counter (`+1` for `'1'`, `-1` for `'0'`)
- Whenever balance returns to `0`, we found one complete special block
- A block has form: `'1' + inner + '0'`
- Recursively maximize `inner`
- Collect all top-level blocks, sort descending, and join

Why sorting works: any swap operation only reorders adjacent special blocks, so globally sorting these blocks in descending order gives the largest possible string.

## What I Learned

- Special binary strings behave like balanced parentheses, which makes recursive decomposition natural.
- Breaking into independent top-level blocks simplifies both correctness and implementation.
- For lexicographic maximization, local recursion + global descending sort is enough.
