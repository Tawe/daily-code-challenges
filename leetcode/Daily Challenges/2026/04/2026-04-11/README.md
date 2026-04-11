# 2026-04-11

## Instructions
You are given an integer array `nums`.

A tuple `(i, j, k)` of 3 **distinct** indices is **good** if `nums[i] == nums[j] == nums[k]`.

The **distance** of a **good** tuple is `abs(i - j) + abs(j - k) + abs(k - i)`, where `abs(x)` denotes the **absolute value** of `x`.

Return an integer denoting the **minimum** possible **distance** of a **good** tuple. If no **good** tuples exist, return `-1`.

**Example 1:**
**Input:** nums = [1,2,1,1,3]
**Output:** 6
**Explanation:**
The minimum distance is achieved by the good tuple `(0, 2, 3)`.
`(0, 2, 3)` is a good tuple because `nums[0] == nums[2] == nums[3] == 1`. Its distance is `abs(0 - 2) + abs(2 - 3) + abs(3 - 0) = 2 + 1 + 3 = 6`.

**Example 2:**
**Input:** nums = [1,1,2,3,2,1,2]
**Output:** 8
**Explanation:**
The minimum distance is achieved by the good tuple `(2, 4, 6)`.
`(2, 4, 6)` is a good tuple because `nums[2] == nums[4] == nums[6] == 2`. Its distance is `abs(2 - 4) + abs(4 - 6) + abs(6 - 2) = 2 + 2 + 4 = 8`.

**Example 3:**
**Input:** nums = [1]
**Output:** -1
**Explanation:**
There are no good tuples. Therefore, the answer is -1.

**Constraints:**
- `1 <= n == nums.length <= 105`
- `1 <= nums[i] <= n`

## My Thoughts

The nice simplification here is that once the three indices are sorted as `a < b < c`, the distance becomes:

- `|a - b| + |b - c| + |c - a|`
- `= (b - a) + (c - b) + (c - a)`
- `= 2 * (c - a)`

So the middle index does not actually matter on its own. We only need the smallest span between the first and third occurrence of the same value.

That leads to a clean approach:

- group indices by value
- for each value with at least 3 occurrences, scan windows of 3 consecutive indices
- compute `2 * (last - first)` for each window
- keep the minimum across all groups

Checking consecutive triples is enough because any wider triple can only have the same or larger span.

Time complexity: `O(n)` overall  
Space complexity: `O(n)`

## What I Learned

- Expanding the formula can turn a problem that looks combinatorial into a simple sliding-window check.
- When indices are already sorted within each value group, consecutive windows often capture the optimum.
- Grouping by value is a strong first step whenever valid tuples are defined by equality.
- Even with larger constraints, a clean algebraic simplification can keep the solution linear.
