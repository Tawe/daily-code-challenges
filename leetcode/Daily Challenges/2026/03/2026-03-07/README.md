# 2026-03-07

## Instructions
You are given a binary string s. You are allowed to perform two types of operations on the string in any sequence:

- Type-1: Remove the character at the start of the string s and append it to the end of the string.
- Type-2: Pick any character in s and flip its value, i.e., if its value is '0' it becomes '1' and vice-versa.

Return the minimum number of type-2 operations you need to perform such that s becomes alternating.

The string is called alternating if no two adjacent characters are equal.

- For example, the strings "010" and "1010" are alternating, while the string "0100" is not.

```
Example 1:
Input: s = "111000"
Output: 2
Explanation: Use the first operation two times to make s = "100011".
Then, use the second operation on the third and sixth elements to make s = "101010".

Example 2:
Input: s = "010"
Output: 0
Explanation: The string is already alternating.

Example 3:
Input: s = "1110"
Output: 1
Explanation: Use the second operation on the second element to make s = "1010".
```

Constraints:

1 <= s.length <= 105
s[i] is either '0' or '1'.

## My Thoughts

This version is trickier than the fixed-string alternating problem because rotations are allowed.  
For odd-length strings, every rotation flips which indices are even/odd, so you cannot just count mismatches once and finish.

The clean approach is:

- Build `t = s + s` so every rotation becomes a window of length `n`.
- Track how many `0`s and `1`s currently sit on even and odd indices.
- For each window, compute mismatch counts for both alternating targets:
  - target `0101...`  -> `even should be 0`, `odd should be 1`
  - target `1010...`  -> `even should be 1`, `odd should be 0`
- Slide the window one step at a time and update counts in `O(1)`.

The parity-swap handling between even and odd `n` is the key detail. Once that is correct, each rotation is evaluated efficiently.

Time complexity: `O(n)`  
Space complexity: `O(n)` for `s + s` (or `O(1)` extra if handled with modular indexing).

## What I Learned

- Allowing rotations turns this into a "check all circular shifts" problem, not just a single mismatch count.
- Doubling the string (`s + s`) is a reliable pattern for circular-window problems.
- For binary alternating targets, every window only needs comparison against two patterns.
- Odd and even window lengths behave differently under shifts, so parity transitions must be handled carefully.
- Maintaining aggregate counts per parity is faster and cleaner than rechecking each character per rotation.
