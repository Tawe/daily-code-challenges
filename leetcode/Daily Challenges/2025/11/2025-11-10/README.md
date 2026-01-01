# 2025-11-10

## Instructions

You are given an array nums of size n, consisting of non-negative integers. Your task is to apply some (possibly zero) operations on the array so that all elements become 0.

In one operation, you can select a subarray [i, j] (where 0 <= i <= j < n) and set all occurrences of the minimum non-negative integer in that subarray to 0.

Return the minimum number of operations required to make all elements in the array 0.

Example 1:

Input: nums = [0,2]

Output: 1

Explanation:

Select the subarray [1,1] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [0,0].
Thus, the minimum number of operations required is 1.
Example 2:

Input: nums = [3,1,2,1]

Output: 3

Explanation:

Select subarray [1,3] (which is [1,2,1]), where the minimum non-negative integer is 1. Setting all occurrences of 1 to 0 results in [3,0,2,0].
Select subarray [2,2] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [3,0,0,0].
Select subarray [0,0] (which is [3]), where the minimum non-negative integer is 3. Setting all occurrences of 3 to 0 results in [0,0,0,0].
Thus, the minimum number of operations required is 3.
Example 3:

Input: nums = [1,2,1,2,1,2]

Output: 4

Explanation:

Select subarray [0,5] (which is [1,2,1,2,1,2]), where the minimum non-negative integer is 1. Setting all occurrences of 1 to 0 results in [0,2,0,2,0,2].
Select subarray [1,1] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [0,0,0,2,0,2].
Select subarray [3,3] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [0,0,0,0,0,2].
Select subarray [5,5] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [0,0,0,0,0,0].
Thus, the minimum number of operations required is 4.

Constraints:

1 <= n == nums.length <= 105
0 <= nums[i] <= 105

## My Thoughts

This problem felt confusing at first because the operation is worded in a way that makes you think you need to simulate subarrays and repeatedly zero things out. But the real trick is noticing that the rule “minimum value in the subarray becomes 0” effectively creates layer boundaries in the array. Every time the array value drops, a layer ends. Every time the value rises to something new, a layer begins.
Once you see the array as a stack of rising and falling heights, the operations are no longer about subarrays, they’re about counting how many “segments” of increasing values you pass through from left to right.
The monotonic stack captures this perfectly. You push values when you rise, and you pop values (and count an operation) when the array drops. At the end, any leftover levels still count as operations. It's surprisingly elegant compared to the messy simulation you'd expect from the problem description.

## What I Learned

- You don’t need to simulate the operations at all, you just need to count value “layers.”
- Zeros and lower values effectively form breakpoints between segments, but the algorithm never has to check this explicitly; the stack automatically handles it.
- A monotonic stack is an extremely powerful pattern for problems involving rising/falling sequences, segmentation, or interpreting arrays as layered structures.
- The optimal solution is linear time (O(n)), and every value is pushed and popped at most once.
- This problem reinforces the idea that when a problem describes a complicated operation, the optimal solution often involves finding the underlying structure rather than simulating the process.
