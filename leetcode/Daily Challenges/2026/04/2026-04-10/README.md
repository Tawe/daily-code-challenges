# 2026-04-10

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

- `1 <= n == nums.length <= 100`
- `1 <= nums[i] <= n`

## My Thoughts

The useful simplification here is that for any sorted triple of indices `a < b < c`, the distance becomes:

- `|a - b| + |b - c| + |c - a| = (b - a) + (c - b) + (c - a) = 2 * (c - a)`

So the middle index does not matter directly.  
To minimize the distance, we just want three equal values whose first and third positions are as close together as possible.

The solution does this by:

- grouping indices by value
- for each value that appears at least 3 times, scanning consecutive windows of 3 indices
- computing `2 * (last - first)` for each triple window
- keeping the minimum across all values

Why consecutive triples are enough:

- if positions are sorted, any non-consecutive triple has an equal or larger spread than some consecutive triple

Time complexity: `O(n)` overall  
Space complexity: `O(n)`

## What I Learned

- Sometimes expanding the formula reveals a much simpler optimization target.
- For sorted positions, minimizing a triple-based metric often reduces to checking consecutive windows.
- Grouping indices by value is a clean first step whenever equality between elements defines valid candidates.
- Small constraints make many approaches acceptable, but spotting the algebraic simplification makes the solution much cleaner.
