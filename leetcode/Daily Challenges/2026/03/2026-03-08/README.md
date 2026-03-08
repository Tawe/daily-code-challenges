# 2026-03-08

## Instructions
Given an array of strings `nums` containing `n` unique binary strings each of length `n`, return a binary string of length `n` that does not appear in `nums`.

If there are multiple valid answers, return any of them.
```
Example 1:
Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.

Example 2:
Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.

Example 3:
Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
```

Constraints:

n == nums.length
1 <= n <= 16
nums[i].length == n
nums[i] is either '0' or '1'
All the strings of nums are unique.

## My Thoughts

The cleanest approach here is diagonal construction (Cantor-style argument):

- Build a new string `ans` of length `n`.
- For each index `i`, look at `nums[i][i]`.
- Set `ans[i]` to the opposite bit:
  - if `nums[i][i] == '0'`, use `'1'`
  - otherwise use `'0'`

Why this guarantees success:

- `ans` differs from `nums[0]` at position `0`
- `ans` differs from `nums[1]` at position `1`
- ...
- `ans` differs from `nums[i]` at position `i`

So `ans` cannot equal any string in `nums`, because it has at least one forced mismatch with every row.

Time complexity: `O(n)`  
Space complexity: `O(n)`

## What I Learned

- Diagonal flipping is a direct way to construct a value guaranteed to be outside a set of fixed-length binary strings.
- Instead of searching all `2^n` possibilities, we can build one valid answer in linear time.
- The proof is built into the construction: each position ensures mismatch with one specific input string.
