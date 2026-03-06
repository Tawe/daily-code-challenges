# 2026-03-06

## Instructions
Given a binary string `s` without leading zeros, return `true` if all `'1'` characters appear in at most one contiguous block (a run of consecutive `'1'`s). Otherwise, return `false`.

Clarification: a block can have length `1` (for example, `"1"` or the single `'1'` in `"10"`).
```
Example 1:
Input: s = "1001"
Output: false
Explanation: The `'1'` characters are split into two separate blocks.

Example 2:
Input: s = "110"
Output: true
```

Constraints:

1 <= s.length <= 100
s[i]​​​​ is either '0' or '1'.
s[0] is '1'
