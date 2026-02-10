# 2026-02-10

## Instructions
You are given an integer array nums.

A subarray is called balanced if the number of distinct even numbers in the subarray is equal to the number of distinct odd numbers.

Return the length of the longest balanced subarray.

```
Example 1:
Input: nums = [2,5,4,3]
Output: 4
Explanation: The longest balanced subarray is [2, 5, 4, 3].
It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [5, 3].

Example 2:
Input: nums = [3,2,2,5,4]
Output: 5
Explanation: The longest balanced subarray is [3, 2, 2, 5, 4].
It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [3, 5].

Example 3:
Input: nums = [1,2,3,2]
Output: 3
Explanation: The longest balanced subarray is [2, 3, 2].
It has 1 distinct even number [2] and 1 distinct odd number [3].
```

Constraints:

1 <= nums.length <= 1500
1 <= nums[i] <= 105

## My Thoughts

This is a brute-force friendly problem because the array is only length 1500. The key is to track distinct evens and odds as you expand each subarray, instead of recomputing from scratch each time. Two hash sets per start index make it easy to update counts in O(1) as the window grows.

## What I Learned
	•	Distinct counts change only when a new value appears, so sets are the right tool.
	•	An O(n^2) scan is totally acceptable when n ≤ 1500, especially with constant-time updates.
	•	“Balanced” here is about distinct values, not total counts, which changes the approach.
