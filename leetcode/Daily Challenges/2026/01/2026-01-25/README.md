# 2026-01-25

## Instructions
You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

Return the minimum possible difference.

```
Example 1:
Input: nums = [90], k = 1
Output: 0
Explanation: There is one way to pick score(s) of one student:
- [90]. The difference between the highest and lowest score is 90 - 90 = 0.
The minimum possible difference is 0.

Example 2:
Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are six ways to pick score(s) of two students:
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
- [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
The minimum possible difference is 2.
 ```

Constraints:

1 <= k <= nums.length <= 1000
0 <= nums[i] <= 105


## My Thoughts

This problem became much simpler once I realized that the relative order of the scores matters more than their original positions. Since I only care about the difference between the highest and lowest scores in a group of size k, sorting the array upfront felt like the natural first step.

After sorting, the problem turns into a sliding window exercise. Any group of k students that minimizes the difference must appear as k consecutive elements in the sorted array. That insight eliminated the need to consider combinations or brute force approaches.

The implementation itself is straightforward: slide a window of size k across the sorted array and track the smallest difference between the first and last elements in each window.

## What I Learned
	•	Sorting can drastically simplify optimization problems involving ranges.
	•	Once data is sorted, many problems reduce to sliding window patterns.
	•	The minimum difference will always occur among consecutive elements after sorting.
	•	Brute force combinations are often unnecessary when constraints hint at ordering.
	•	Simple loops combined with preprocessing can yield very efficient solutions.
	•	Time complexity matters: this solution runs in O(n log n) due to sorting, which fits the constraints well.