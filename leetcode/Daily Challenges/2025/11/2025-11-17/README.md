# 2025-11-17

## Instructions

Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

Example 1:

Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.
Example 2:

Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.

Constraints:

1 <= nums.length <= 105
0 <= k <= nums.length
nums[i] is 0 or 1

## My Thoughts

This problem looked straightforward at first. I just needed to track how many zeros there were between 1s. My first attempt kept a running counter of zeros, and that felt reasonable. But the catch was that I never reset the counter when I hit a new 1, so the “distance” was actually measuring all zeros ever seen, not just the zeros since the most recent 1.
Once I walked through an example by hand, it became obvious why my logic broke: the distance between consecutive 1s must always reset when a new 1 appears. After that, the whole problem became much more predictable.

## What I Learned

- The distance between 1s is only the zeros since the previous 1, not the total zeros in the array.
- Resetting the distance counter at each 1 is the key to making the logic correct.
- The first 1 must be handled separately since it has no previous 1 to compare against.
- Using a placeholder like Infinity (or a boolean) for “no previous 1 yet” cleans up the logic.
- The problem becomes a simple single-pass O(n) scan once the state is tracked correctly.
- Walking through tricky inputs manually is often the fastest way to spot logic mistakes.
