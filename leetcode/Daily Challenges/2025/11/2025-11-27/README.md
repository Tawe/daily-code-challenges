# 2025-11-27

## Instructions

You are given an array of integers nums and an integer k.

Return the maximum sum of a subarray of nums, such that the size of the subarray is divisible by k.

```
Example 1:

Input: nums = [1,2], k = 1

Output: 3

Explanation:

The subarray [1, 2] with sum 3 has length equal to 2 which is divisible by 1.

Example 2:

Input: nums = [-1,-2,-3,-4,-5], k = 4

Output: -10

Explanation:

The maximum sum subarray is [-1, -2, -3, -4] which has length equal to 4 which is divisible by 4.

Example 3:

Input: nums = [-5,1,2,-3,4], k = 2

Output: 4

Explanation:

The maximum sum subarray is [1, 2, -3, 4] which has length equal to 4 which is divisible by 2.
```

Constraints:

1 <= k <= nums.length <= 2 * 105
-109 <= nums[i] <= 109

## My Thoughts

When I first read this problem, I misunderstood what it was asking for.
I kept focusing on whether a number or a sum was divisible by k, and that led me down the wrong path. I tried sorting the array, looking at absolute values, and checking if certain sums were divisible, all of which had nothing to do with the real requirement.
The breakthrough came when I realized I was mentally solving the wrong problem.
The problem doesn’t care about:
- whether the numbers are divisible by k
- whether the sum is divisible by k
- whether individual elements meet any special condition
The only thing that matters is whether the length of the subarray is divisible by k.
That shift completely reframed everything.
Once I internalized that the length is the gatekeeper, the problem became about scanning all valid lengths (k, 2k, 3k…) and finding the subarray among those that produces the maximum sum. In Example 3, that explained why the answer wasn’t 2 or 3, but instead 4, the best subarray happens to be of length 4, which is divisible by 2.
After that, the prefix-sum pattern made sense: determine which prefix indices share the same modulo class, and use that to efficiently compute all valid length-divisible subarrays. It’s a classic trick the kind that feels confusing until you finally see how length constraints translate into remainder constraints.
This was another case where the hardest part was not the algorithm, but the mindset shift. I had to stop thinking about the values and start thinking structurally: what does “length divisible by k” actually mean in terms of indices, prefixes, and remainders?

## What I Learned

The problem has nothing to do with numbers or sums being divisible by k, only the subarray length matters.
A subarray of nums[i..j] has length (j - i), so the length condition becomes a simple index rule:
```(j - i) % k == 0  →  j % k == i % k```
This means we only need to track prefix sums grouped by index % k remainder classes.
For every index j, we can pair it with the smallest prefix sum previously seen in the same remainder class to maximize the subarray sum.
Sorting the array or looking at absolute values doesn’t help; the subarray must remain contiguous, so ordering is preserved.
The answer is always the maximum sum, not the length and not a divisibility check on the values.
This problem reinforced that sometimes the “obvious” interpretation (checking numbers or sums) is actually misleading, the real structure is hidden in how the indices relate modulo k.
Prefix sums and remainder classes show up over and over in problems with “divisible by k” constraints. Once I recognized the pattern, the solution snapped into place.
