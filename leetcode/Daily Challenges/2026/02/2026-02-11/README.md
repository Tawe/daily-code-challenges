# 2026-02-11

## Instructions
You are given an integer array nums.

A subarray is called balanced if the number of distinct even numbers in the subarray is equal to the number of distinct odd numbers.

Return the length of the longest balanced subarray.

```
Example 1:
Input: nums = [2,5,4,3]
Output: 4
Explanation:
The longest balanced subarray is [2, 5, 4, 3].
It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [5, 3]. Thus, the answer is 4.

Example 2:
Input: nums = [3,2,2,5,4]
Output: 5
Explanation:
The longest balanced subarray is [3, 2, 2, 5, 4].
It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [3, 5]. Thus, the answer is 5.

Example 3:
Input: nums = [1,2,3,2]
Output: 3
Explanation:
The longest balanced subarray is [2, 3, 2].
It has 1 distinct even number [2] and 1 distinct odd number [3]. Thus, the answer is 3.
```

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105

## My Thoughts

The constraint jump to 1e5 rules out the O(n^2) scan from yesterday. The core difficulty is that the "balance" depends on distinct counts, which don't update cleanly with a simple two-pointer. I had to think in terms of last-seen positions and prefix effects to keep updates fast enough.

## What I Learned

- When distinct counts drive the condition, tracking last occurrence is often the key to fast updates.
- Big constraints usually mean you need a data structure view (prefix deltas, lazy blocks, etc.) rather than a direct window.
- Even when a condition looks like a classic sliding window, distinctness can break the monotonicity you need.
