# 2026-04-13

## Instructions
Given an integer array `nums` **(0-indexed)** and two integers `target` and `start`, find an index `i` such that `nums[i] == target` and `abs(i - start)` is **minimized**. Note that `abs(x)` is the absolute value of `x`.

Return `abs(i - start)`.

It is **guaranteed** that `target` exists in `nums`.

**Example 1:**
**Input:** nums = [1,2,3,4,5], target = 5, start = 3
**Output:** 1
**Explanation:** nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

**Example 2:**
**Input:** nums = [1], target = 1, start = 0
**Output:** 0
**Explanation:** nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.

**Example 3:**
**Input:** nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
**Output:** 0
**Explanation:** Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.

**Constraints:**
- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 104`
- `0 <= start < nums.length`
- `target` is in `nums`.

## My Thoughts

This one is much more direct than it first looks. The goal is simply to find every index where `nums[i] == target`, measure the distance from `start`, and keep the smallest one.

Because of that, a single linear scan is enough. The Rust solution walks through the array, checks whether the current value matches `target`, and updates the answer with `abs(i - start)` whenever it does. Since the problem guarantees the target exists, we know the minimum will be set.

There is no need for extra preprocessing or data structures here. For one query, the straight pass is both the simplest and the right complexity.

### Complexity

- Time: `O(n)`
- Space: `O(1)`

## What I Learned

This challenge was a nice reminder that the best solution is sometimes just the cleanest direct pass. Once the prompt is reduced to "minimize `abs(i - start)` over matching indices," the implementation becomes very small.

It also reinforced the value of translating the problem into one exact calculation before coding. That usually makes it obvious whether a more advanced pattern is actually needed.
