# 2026-03-05
[2026-03-05 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-05)

## Instructions
Smallest Gap
Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

- There will always be at least one pair of matching characters.
- The returned substring should exclude the matching characters.
- If two or more gaps are the same length, return the characters from the first one.

For example, given "ABCDAC", return "DA".

- Only "A" and "C" repeat in the string.
- The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
- So return the string between the two "C" characters.

## My Thoughts

The key idea is to compare every pair of positions and only care about pairs where the characters match.

For each matching pair `(i, j)`:

- compute the gap size as `j - i - 1`
- if this gap is smaller than the best one so far, update:
  - the smallest gap length
  - the substring `s[i + 1:j]`

The implementation uses a strict `<` check, not `<=`. That matters because when two gaps are equal, we keep the first one found, which matches the challenge rule.

This is a straightforward brute-force solution:

- time complexity: `O(n^2)` from the nested loops
- extra space: `O(1)` (excluding the returned substring)

## What I Learned

- A nested-loop pair scan is often the simplest way to solve "closest matching characters" problems.
- Choosing `<` versus `<=` can directly control tie-breaking behavior.
- Tracking both the best metric (gap length) and its associated output (substring) keeps updates clean.
