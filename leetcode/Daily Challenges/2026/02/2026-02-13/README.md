# 2026-02-13

## Instructions
You are given a string s consisting only of the characters 'a', 'b', and 'c'.

A substring of s is called balanced if all distinct characters in the substring appear the same number of times.

Return the length of the longest balanced substring of s.

```
Example 1:
Input: s = "abbac"
Output: 4
Explanation:
The longest balanced substring is "abba" because both distinct characters 'a' and 'b' each appear exactly 2 times.

Example 2:
Input: s = "aabcc"
Output: 3
Explanation:
The longest balanced substring is "abc" because all distinct characters 'a', 'b' and 'c' each appear exactly 1 time.

Example 3:
Input: s = "aba"
Output: 2
Explanation:
One of the longest balanced substrings is "ab" because both distinct characters 'a' and 'b' each appear exactly 1 time. Another longest balanced substring is "ba".
```

Constraints:

1 <= s.length <= 105
s contains only the characters 'a', 'b', and 'c'.

## My Thoughts

Because `s.length` can be `100000`, the quadratic substring scan from yesterday is too slow here. The key is to split the problem into character-set cases and handle each in linear time:

- one distinct character: longest run
- two distinct characters: for each pair (`a/b`, `a/c`, `b/c`), scan segments that avoid the third character and find longest equal-count window using prefix-difference first-seen indices
- three distinct characters: use prefix state `(countA-countB, countA-countC)` and track earliest index for each state

Taking the max across those cases gives the longest balanced substring in `O(n)` time.

## What I Learned

- Tight constraints (`n = 10^5`) usually mean replacing brute force with prefix-state hashing.
- Reframing by cases (1-char, 2-char, 3-char) can make a hard condition manageable.
- Equal-frequency substring checks often reduce to repeated prefix differences.
- With a tiny fixed alphabet (`a,b,c`), doing a few linear passes is still linear overall and keeps the code readable.
