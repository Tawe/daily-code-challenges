# 2026-04-23

## Instructions
You are given a **0-indexed** integer array `nums`. There exists an array `arr` of length `nums.length`, where `arr[i]` is the sum of `|i - j|` over all `j` such that `nums[j] == nums[i]` and `j != i`. If there is no such `j`, set `arr[i]` to be `0`.

Return _the array_ `arr`_._

**Example 1:**
**Input:** nums = [1,3,1,1,2]
**Output:** [5,0,3,4,0]
**Explanation:** 
When i = 0, nums[0] == nums[2] and nums[0] == nums[3]. Therefore, arr[0] = |0 - 2| + |0 - 3| = 5. 
When i = 1, arr[1] = 0 because there is no other index with value 3.
When i = 2, nums[2] == nums[0] and nums[2] == nums[3]. Therefore, arr[2] = |2 - 0| + |2 - 3| = 3. 
When i = 3, nums[3] == nums[0] and nums[3] == nums[2]. Therefore, arr[3] = |3 - 0| + |3 - 2| = 4. 
When i = 4, arr[4] = 0 because there is no other index with value 2. 

**Example 2:**
**Input:** nums = [0,5,3]
**Output:** [0,0,0]
**Explanation:** Since each element in nums is distinct, arr[i] = 0 for all i.

**Constraints:**
- `1 <= nums.length <= 105`
- `0 <= nums[i] <= 109`

**Note:** This question is the same as [2121: Intervals Between Identical Elements.](https://leetcode.com/problems/intervals-between-identical-elements/description/)

## My Thoughts

The direct approach would be too slow because each index would need to compare against every other matching value. The better way is to group indices by the value in `nums`, then solve each group independently.

The Rust solution builds a `HashMap` from each number to the list of indices where it appears. For each group, the indices are already sorted because they were collected from left to right. That makes prefix sums a clean way to compute the total distance from one index to every other index in the same group.

For a position `idx` inside a group:

- the distance to all matching indices on the left is `idx * left_count - left_sum`
- the distance to all matching indices on the right is `right_sum - idx * right_count`

Adding those two values gives the answer for that original index.

### Complexity

- Time: `O(n)`
- Space: `O(n)`

## What I Learned

This challenge reinforced a really useful prefix-sum pattern: when indices are sorted, the sum of absolute distances can be split into a left side and a right side.

It also showed why grouping by value first matters. Once identical values are isolated, the problem becomes a set of smaller ordered-index calculations instead of a full pairwise comparison across the whole array.
