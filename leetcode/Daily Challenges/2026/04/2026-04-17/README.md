# 2026-04-17

## Instructions
You are given an integer array `nums`.

A **mirror pair** is a pair of indices `(i, j)` such that:

- `0 <= i < j < nums.length`, and
- `reverse(nums[i]) == nums[j]`, where `reverse(x)` denotes the integer formed by reversing the digits of `x`. Leading zeros are omitted after reversing, for example `reverse(120) = 21`.

Return the **minimum** absolute distance between the indices of any mirror pair. The absolute distance between indices `i` and `j` is `abs(i - j)`.

If no mirror pair exists, return `-1`.

**Example 1:**
**Input:** nums = [12,21,45,33,54]
**Output:** 1
**Explanation:**
The mirror pairs are:
- (0, 1) since `reverse(nums[0]) = reverse(12) = 21 = nums[1]`, giving an absolute distance `abs(0 - 1) = 1`.
- (2, 4) since `reverse(nums[2]) = reverse(45) = 54 = nums[4]`, giving an absolute distance `abs(2 - 4) = 2`.
The minimum absolute distance among all pairs is 1.

**Example 2:**
**Input:** nums = [120,21]
**Output:** 1
**Explanation:**
There is only one mirror pair (0, 1) since `reverse(nums[0]) = reverse(120) = 21 = nums[1]`.
The minimum absolute distance is 1.

**Example 3:**
**Input:** nums = [21,120]
**Output:** -1
**Explanation:**
There are no mirror pairs in the array.

**Constraints:**
- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 109`​​​​​​​

## My Thoughts

The nice thing about this problem is that you do not need to compare every pair. If `nums[j]` can complete a mirror pair, then I only need to know whether I have already seen an earlier index `i` whose reversed value equals `nums[j]`.

The Rust solution does exactly that in one pass. As I scan from left to right, I keep a `HashMap` from a reversed number to the latest index where that reversed number was produced. When I arrive at position `j`, I first check whether the current value already exists in the map. If it does, that means there is some earlier index `i` where `reverse(nums[i]) == nums[j]`, so `j - i` is a valid mirror-pair distance.

After that, I reverse the current number and store that reversed value with the current index. Since we want the minimum absolute distance and we scan in increasing order, keeping the most recent matching index is enough to get the smallest gap when a match appears.

### Complexity

- Time: `O(n * d)`, where `d` is the number of digits in each number
- Space: `O(n)`

## What I Learned

This one was a good reminder that "find a previous element with a transformed relationship to the current one" is often a hashmap problem. The transformation here is digit reversal, but the pattern is the same.

It also reinforced why the latest previous index matters for minimum-distance questions. When scanning left to right, the closest valid earlier match is the one most likely to improve the answer.
