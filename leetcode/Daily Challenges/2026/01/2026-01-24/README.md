# 2026-01-24

## Instructions
The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.

For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:

Each element of nums is in exactly one pair, and
The maximum pair sum is minimized.
Return the minimized maximum pair sum after optimally pairing up the elements.

```
 Example 1:
Input: nums = [3,5,2,3]
Output: 7
Explanation: The elements can be paired up into pairs (3,3) and (5,2).
The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.

Example 2:
Input: nums = [3,5,4,2,4,6]
Output: 8
Explanation: The elements can be paired up into pairs (3,5), (4,4), and (6,2).
The maximum pair sum is max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8.
```

Constraints:

n == nums.length
2 <= n <= 105
n is even.
1 <= nums[i] <= 105

## My Thoughts

This problem looked more complicated at first than it actually was. The key was realizing that I’m not trying to minimize each pair sum, I’m trying to minimize the largest pair sum after all elements are paired.

Once I sorted the array, the strategy became very clear. Pairing the smallest number with the largest number balances the sums and prevents any one pair from becoming too large. Doing this consistently across the array ensures that the worst-case pair sum is as small as possible.

I also liked that this solution is very direct: sort, pair from the outside inward, and track the maximum sum. There’s no need for extra data structures or complicated logic.

## What I Learned
	•	Sorting can turn a pairing optimization problem into a greedy one.
	•	Pairing smallest with largest minimizes the maximum pair sum.
	•	Sometimes minimizing the worst case is more important than minimizing individual values.
	•	Greedy strategies are often correct when symmetry and balance are involved.
	•	Tracking only the maximum during iteration keeps the solution simple and efficient.
	•	Clear problem constraints often hint at the intended optimal approach.
