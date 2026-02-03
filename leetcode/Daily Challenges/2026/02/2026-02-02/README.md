# 2026-02-02

## Instructions
You are given a 0-indexed array of integers nums of length n, and two positive integers k and dist.

The cost of an array is the value of its first element. For example, the cost of [1,2,3] is 1 while the cost of [3,4,1] is 3.

You need to divide nums into k disjoint contiguous subarrays, such that the difference between the starting index of the second subarray and the starting index of the kth subarray should be less than or equal to dist. In other words, if you divide nums into the subarrays nums[0..(i1 - 1)], nums[i1..(i2 - 1)], ..., nums[ik-1..(n - 1)], then ik-1 - i1 <= dist.

Return the minimum possible sum of the cost of these subarrays.

``
Example 1:
Input: nums = [1,3,2,6,4,2], k = 3, dist = 3
Output: 5
Explanation: The best possible way to divide nums into 3 subarrays is: [1,3], [2,6,4], and [2]. This choice is valid because ik-1 - i1 is 5 - 2 = 3 which is equal to dist. The total cost is nums[0] + nums[2] + nums[5] which is 1 + 2 + 2 = 5.
It can be shown that there is no possible way to divide nums into 3 subarrays at a cost lower than 5.

Example 2:
Input: nums = [10,1,2,2,2,1], k = 4, dist = 3
Output: 15
Explanation: The best possible way to divide nums into 4 subarrays is: [10], [1], [2], and [2,2,1]. This choice is valid because ik-1 - i1 is 3 - 1 = 2 which is less than dist. The total cost is nums[0] + nums[1] + nums[2] + nums[3] which is 10 + 1 + 2 + 2 = 15.
The division [10], [1], [2,2,2], and [1] is not valid, because the difference between ik-1 and i1 is 5 - 1 = 4, which is greater than dist.
It can be shown that there is no possible way to divide nums into 4 subarrays at a cost lower than 15.
Example 3:

Input: nums = [10,8,18,9], k = 3, dist = 1
Output: 36
Explanation: The best possible way to divide nums into 4 subarrays is: [10], [8], and [18,9]. This choice is valid because ik-1 - i1 is 2 - 1 = 1 which is equal to dist.The total cost is nums[0] + nums[1] + nums[2] which is 10 + 8 + 18 = 36.
The division [10], [8,18], and [9] is not valid, because the difference between ik-1 and i1 is 3 - 1 = 2, which is greater than dist.
It can be shown that there is no possible way to divide nums into 3 subarrays at a cost lower than 36.
 ```

Constraints:

3 <= n <= 105
1 <= nums[i] <= 109
3 <= k <= n
k - 2 <= dist <= n - 2

## My Thoughts

This one looked like the earlier “split into 3 subarrays” problem, but the dist constraint changes everything. The key realization is that I’m not just picking the cheapest starting values anywhere, I’m picking k − 1 start indices (for subarrays 2 through k) that must all fit inside a sliding window of width dist + 1, and the window is anchored by the start of the second subarray (i1).

That “anchored” part is what makes it tricky:
	•	When I choose i1 (start of the 2nd subarray), that index must be included in the cost.
	•	Then I need to choose the remaining k − 2 start indices from the next dist positions: i1 + 1 ... i1 + dist.

So the true cost shape is:

nums[0] + nums[i1] + (sum of the smallest k−2 values in nums[i1+1 .. i1+dist])

Your Python approach (two heaps + lazy deletion) is the right kind of tool for speed, because it’s basically maintaining “k-smallest in a sliding window” efficiently.

But your specific implementation doesn’t match the anchored requirement, it starts with nums[1 : dist+2] and picks k−1 smallest from that window, which accidentally allows the solution to skip nums[i1], even though i1 must always be part of the cost.

That’s why it “didn’t work”: it’s optimizing a slightly different problem than the one described.

## What I Learned
	•	The split points (starts of subarrays) are the real decision variables, not the subarrays themselves.
	•	The dist rule doesn’t just limit “how far apart things can be”, it forces the kth start to be close to the 2nd start, meaning my choices live inside a sliding window.
	•	The biggest trick: the start of the second subarray (i1) is mandatory, so I can’t just take the k−1 smallest values in a window — I must take:
	•	the value at i1, plus
	•	the smallest k−2 values in the rest of the window (i1+1 ... i1+dist)
	•	Two-heaps + lazy deletion is a powerful pattern for “sliding window + k smallest”, but correctness depends on defining the window and required elements exactly right.
	•	Performance-wise, this is a good lesson in why naive nested loops blow up at n = 1e5, and why you need data structures (heaps / multisets) to keep the update per shift near log n.
