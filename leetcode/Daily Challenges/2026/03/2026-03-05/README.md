# 2026-03-05

## Instructions
You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.
```
Example 1:
Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.

Example 2:
Input: s = "10"
Output: 0
Explanation: s is already alternating.

Example 3:
Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
``` 

Constraints:

1 <= s.length <= 10^4
s[i] is either '0' or '1'.

## My Thoughts

An alternating binary string can only take one of two forms:

- starting with `0`: `010101...`
- starting with `1`: `101010...`

So the minimum operations is just the smaller mismatch count between those two targets.

The Go solution tracks:

- `misStartWith0`: positions where `s[i]` does not match the expected character for a pattern starting with `0`
- `misStartWith1`: positions where `s[i]` does not match the expected character for a pattern starting with `1`

For each index:

- if `i` is even, expected chars are `0` and `1`
- if `i` is odd, expected chars are `1` and `0`

At the end, return the minimum of those two mismatch totals.

This is optimal for this problem because each character is visited once.

Time complexity: `O(n)`  
Space complexity: `O(1)`

## What I Learned

- For binary alternating-string problems, there are only two valid global target patterns.
- Counting mismatches against both targets in one pass gives a clean and efficient solution.
- The final answer is simply `min(mismatchesToPatternA, mismatchesToPatternB)`.
