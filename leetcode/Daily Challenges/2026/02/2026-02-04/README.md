# 2026-02-04

## Instructions
You are given an integer array nums of length n.

A trionic subarray is a contiguous subarray nums[l...r] (with 0 <= l < r < n) for which there exist indices l < p < q < r such that:

nums[l...p] is strictly increasing,
nums[p...q] is strictly decreasing,
nums[q...r] is strictly increasing.
Return the maximum sum of any trionic subarray in nums.

```
Example 1:
Input: nums = [0,-2,-1,-3,0,2,-1]
Output: -4
Explanation:
Pick l = 1, p = 2, q = 3, r = 5:
nums[l...p] = nums[1...2] = [-2, -1] is strictly increasing (-2 < -1).
nums[p...q] = nums[2...3] = [-1, -3] is strictly decreasing (-1 > -3)
nums[q...r] = nums[3...5] = [-3, 0, 2] is strictly increasing (-3 < 0 < 2).
Sum = (-2) + (-1) + (-3) + 0 + 2 = -4.

Example 2:
Input: nums = [1,4,2,7]
Output: 14
Explanation:
Pick l = 0, p = 1, q = 2, r = 3:
nums[l...p] = nums[0...1] = [1, 4] is strictly increasing (1 < 4).
nums[p...q] = nums[1...2] = [4, 2] is strictly decreasing (4 > 2).
nums[q...r] = nums[2...3] = [2, 7] is strictly increasing (2 < 7).
Sum = 1 + 4 + 2 + 7 = 14.
```

Constraints:

4 <= n = nums.length <= 105
-109 <= nums[i] <= 109
It is guaranteed that at least one trionic subarray exists.

## My Thoughts

This one tripped me because my first DP version was “mathematically reasonable” but didn’t respect the structure rules. I was tracking “best increasing sum ending here”, but that includes single-element subarrays and a single element isn’t a valid “increasing segment” for this problem because the indices have to satisfy l < p < q < r.

The failure case showed a classic DP pitfall: a value can be correct for one subproblem definition, but wrong when reused in another phase. My DP state didn’t carry the “length ≥ 2” requirement, so it accidentally created trionics that weren’t actually legal.

Once I made the segment-length rules explicit in the DP states (inc2, dec, tri), everything clicked, and the edge case went away.

## What I Learned
	•	Trionic requires l < p < q < r, which forces each segment to have length ≥ 2.
	•	A DP state like “best increasing ending at i” can hide invalid cases if it allows length 1.
	•	When a later phase depends on “having already formed something valid,” you often need separate states (like inc2) instead of reusing the “best” value.
	•	“Wrong answer on one tricky testcase” is often a sign that your DP definition is missing a constraint, not that your transitions are totally off.
	•	Encoding problem rules directly into state definitions is usually simpler than trying to patch correctness later.
