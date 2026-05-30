# 2026-05-29

## Instructions
You are given an integer array `nums`.

You replace each element in `nums` with the **sum** of its digits.

Return the **minimum** element in `nums` after all replacements.

**Example 1:**
**Input:** nums = [10,12,13,14]
**Output:** 1
**Explanation:**
`nums` becomes `[1, 3, 4, 5]` after all replacements, with minimum element 1.

**Example 2:**
**Input:** nums = [1,2,3,4]
**Output:** 1
**Explanation:**
`nums` becomes `[1, 2, 3, 4]` after all replacements, with minimum element 1.

**Example 3:**
**Input:** nums = [999,19,199]
**Output:** 10
**Explanation:**
`nums` becomes `[27, 10, 19]` after all replacements, with minimum element 10.

**Constraints:**
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 104`

## Solution

Replace each number with the sum of its digits, then return the minimum of those transformed values.

### Key idea

For each number `n`:

- convert it to a string
- split it into characters
- convert each character back to an integer digit
- sum those digits

That gives the digit-sum replacement for `n`.

After applying this to every element, take the minimum value among the results.

### Why this works

The problem asks for exactly two steps:

- transform every number into its digit sum
- find the smallest transformed value

This implementation performs those steps directly and in order.

### Complexity

- Time: `O(d)`
- Space: `O(d)`

where `d` is the total number of digits across all numbers.
With the given constraints, this is easily fast enough.
