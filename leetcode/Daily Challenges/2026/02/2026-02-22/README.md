# 2026-02-22

## Instructions
Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.
 
```
Example 1:
Input: n = 22
Output: 2
Explanation: 22 in binary is "10110".
The first adjacent pair of 1's is "10110" with a distance of 2.
The second adjacent pair of 1's is "10110" with a distance of 1.
The answer is the largest of these two distances, which is 2.
Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.

Example 2:
Input: n = 8
Output: 0
Explanation: 8 in binary is "1000".
There are not any adjacent pairs of 1's in the binary representation of 8, so we return 0.

Example 3:
Input: n = 5
Output: 2
Explanation: 5 in binary is "101".
```

Constraints:

1 <= n <= 109

## My Thoughts

I solved this by tracking the index of the previous `1` in the binary string.

- Convert `n` to binary once with `decbin($n)`
- Keep `lastOneIndex` (initially `-1`)
- When we see a `1` at index `i`:
  - If we have seen a previous `1`, compute `i - lastOneIndex`
  - Update the maximum distance
  - Move `lastOneIndex` to `i`

This handles all cases cleanly, including consecutive `1`s like `"11"` where the distance should be `1`.

Time complexity is `O(k)`, where `k` is the number of bits in `n` (`k <= 30` for this constraint).  
Space complexity is `O(k)` because of the binary string created by `decbin`.

## What I Learned

- Tracking indices is more reliable than counting only zeros between `1`s.
- Consecutive `1`s are an important edge case (`n = 3` should return `1`).
- For bit-position distance questions, thinking in positions first helps avoid off-by-one mistakes.
