# 2025-12-06

## Instructions

You are given an integer array nums and an integer k. Your task is to partition nums into one or more non-empty contiguous segments such that in each segment, the difference between its maximum and minimum elements is at most k.

Return the total number of ways to partition nums under this condition.

Since the answer may be too large, return it modulo 109 + 7.

```
Example 1:
Input: nums = [9,4,1,3,7], k = 4
Output: 6
Explanation:
There are 6 valid partitions where the difference between the maximum and minimum elements in each segment is at most k = 4:
[[9], [4], [1], [3], [7]]
[[9], [4], [1], [3, 7]]
[[9], [4], [1, 3], [7]]
[[9], [4, 1], [3], [7]]
[[9], [4, 1], [3, 7]]
[[9], [4, 1, 3], [7]]

Example 2:
Input: nums = [3,3,4], k = 0
Output: 2
Explanation:
There are 2 valid partitions that satisfy the given conditions:
[[3], [3], [4]]
[[3, 3], [4]]
 ```

Constraints:

2 <= nums.length <= 5 * 104
1 <= nums[i] <= 109
0 <= k <= 109

## My Thoughts

This problem looked overwhelming at first because the naïve interpretation suggests checking every possible partition, which immediately explodes combinatorially. Even worse, validating each segment by scanning for min/max makes brute force completely unworkable. My first instinct was to reach for recursion or backtracking, but with an array length up to 50,000, that was never going to scale.
Once I slowed down and reframed the problem, it became clear that the real challenge wasn’t choosing cuts, it was efficiently knowing where cuts are allowed.
Every valid partition can be built from left to right, as long as each segment satisfies:
```max(segment) - min(segment) ≤ k```
The key realization was that this constraint depends only on a window of elements, and windows can be slid efficiently. That shifted the problem from “try everything” to “track the longest prefix ending at r that is valid.” Once I saw that, dynamic programming fell naturally into place: for every ending index r, I needed to add up all the ways to start a valid segment ending at r.
The final breakthrough came from recognizing two bottlenecks:
Checking max/min for every window repeatedly is too slow.
→ Use monotonic deques to maintain max and min in O(1).
Summing dp[left..r] for every r is too slow.
→ Use prefix sums so each dp transition becomes O(1).
Once those two insights clicked, the entire problem collapsed elegantly into an O(n) solution. It was one of those great algorithmic moments where the structure of the problem becomes obvious in hindsight even though it looked chaotic at the start.

## What I Learned

- Sliding windows aren’t just for sums; they can enforce arbitrary segment constraints.
If the constraint can be maintained with monotonic structures, window techniques become incredibly powerful.
- Monotonic deques are an essential tool.
They allow constant-time tracking of min/max as a window expands or contracts. Without them, this problem is effectively unsolvable at scale.
- Dynamic programming becomes far more usable when combined with prefix sums.
Instead of recomputing interval sums, prefix sums let you collapse potentially O(n) transitions down to O(1).
- The “longest valid window” viewpoint is often more valuable than enumerating all valid windows.
In this problem, once the left boundary of the valid window is known, all positions inside it are valid starting points.
- Brute force thinking can be useful—but only as a conceptual stepping stone.
Understanding what the slow solution does helps identify what information needs to be tracked efficiently.
- Problems that initially feel exponential often become linear with the right data structures.
Here, the combination of sliding window + monotonic queues + prefix sums turned something terrifying into a clean, linear-time algorithm.
