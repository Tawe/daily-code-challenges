# 2026-01-23

## Instructions
Given an array nums, you can perform the following operation any number of times:

Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
Replace the pair with their sum.
Return the minimum number of operations needed to make the array non-decreasing.

An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).
```
Example 1:
Input: nums = [5,2,3,1]
Output: 2
Explanation:
The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].
The array nums became non-decreasing in two operations.

Example 2:
Input: nums = [1,2,2]
Output: 0
Explanation:
The array nums is already sorted.
```
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

## My Thoughts

This problem looked deceptively simple at first, but scaling it up to large inputs completely changed the approach. My initial brute-force solution worked for small arrays, but once the constraints jumped to 100k elements, it became clear that repeatedly scanning the array wouldn’t be fast enough.

The real challenge wasn’t just picking the minimum-sum adjacent pair, it was keeping track of adjacency correctly after merges. Once elements start collapsing into sums, the array is no longer a simple list. That’s when the problem stopped being about math and became about data structure correctness.

Using a doubly linked list made adjacency explicit, and the priority queue ensured I always picked the smallest valid pair efficiently. However, the tricky part was realizing that not every pair pulled from the heap is still valid. Even if both nodes still exist, they might no longer be neighbors. Missing that detail caused subtle off-by-one errors in the operation count.

This was one of those bugs that only shows up in edge cases, everything “looked right” until a carefully constructed test case exposed the flaw.

## What I Learned
	•	Performance constraints can completely change the required approach.
	•	Priority queues need validation logic when the underlying structure mutates.
	•	Two nodes existing does not guarantee they are still adjacent.
	•	Doubly linked lists are invaluable when adjacency must be preserved across mutations.
	•	Cached values (like sums) can become stale, recomputation can be safer.
	•	Logical correctness matters more than passing “most” test cases.
	•	Many hard bugs are caused by missing invariants, not incorrect formulas.
	•	When an answer is “almost right,” the issue is usually structural, not algorithmic.