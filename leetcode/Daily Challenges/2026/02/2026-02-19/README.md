# 2026-02-19

## Instructions
Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.
```
Example 1:
Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

Example 2:
Input: s = "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
```

Constraints:

1 <= s.length <= 105
s[i] is either '0' or '1'.

## My Thoughts

The key idea is to think in groups of consecutive equal chars instead of generating substrings directly.

- Track the current run length (`currRun`) and previous run length (`prevRun`)
- As I scan the string, if the char stays the same, extend `currRun`
- When the char changes, add `min(prevRun, currRun)` to the answer, then shift runs
- After the loop, add one final `min(prevRun, currRun)` for the last boundary

This works because every valid substring must be formed across one boundary between a 0-run and a 1-run, and the count contributed by that boundary is the smaller run size.

## What I Learned

- Grouping consecutive characters can turn a substring-counting problem into a simple linear pass.
- `min(previous group, current group)` is the exact number of balanced binary substrings at each transition.
- This avoids brute force completely and gives `O(n)` time with `O(1)` extra space.
