# 2026-02-06

## Instructions
You are given an integer array nums and an integer k.

An array is considered balanced if the value of its maximum element is at most k times the minimum element.

You may remove any number of elements from nums​​​​​​​ without making it empty.

Return the minimum number of elements to remove so that the remaining array is balanced.

Note: An array of size 1 is considered balanced as its maximum and minimum are equal, and the condition always holds true. 
```
Example 1:
Input: nums = [2,1,5], k = 2
Output: 1
Explanation:
Remove nums[2] = 5 to get nums = [2, 1].
Now max = 2, min = 1 and max <= min * k as 2 <= 1 * 2. Thus, the answer is 1.

Example 2:
Input: nums = [1,6,2,9], k = 3
Output: 2
Explanation:
Remove nums[0] = 1 and nums[3] = 9 to get nums = [6, 2].
Now max = 6, min = 2 and max <= min * k as 6 <= 2 * 3. Thus, the answer is 2.

Example 3:
Input: nums = [4,6], k = 2
Output: 0
Explanation:
Since nums is already balanced as 6 <= 4 * 2, no elements need to be removed.
```
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 105

## My Thoughts

This problem looked like it was about checking min and max, but the twist is that you’re allowed to delete any elements which means the “best remaining array” is really about finding the largest group of values that can coexist under the rule max <= min * k.

Once the array is sorted, that rule becomes much easier to reason about: for a fixed left value (nums[l]), you can keep expanding right (r) as long as the current max still fits the condition. That turns the problem into a classic sliding window: “how big of a valid window can I keep?”

The big mental shift was realizing:
I’m not trying to construct the final array explicitly, I’m just trying to keep the largest valid subset, and deletions are everything outside it.

## What I Learned
	•	Sorting often converts a “min/max condition” problem into a range/window problem.
	•	If the array is sorted, min is the left end and max is the right end — no searching needed.
	•	The sliding window works because once nums[r] is too big for nums[l] * k, moving l right is the only way to fix it.
	•	The goal becomes: maximize kept elements, because removals = n - kept.
	•	Implementation detail matters: returning inside a loop can silently break logic even when the idea is correct.