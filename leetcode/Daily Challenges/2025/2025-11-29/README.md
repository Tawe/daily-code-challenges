# 2025-11-29

## Instructions
You are given an integer array nums and an integer k. You can perform the following operation any number of times:

- Select an index i and replace nums[i] with nums[i] - 1.
- Return the minimum number of operations required to make the sum of the array divisible by k.

```yaml
Example 1:

Input: nums = [3,9,7], k = 5

Output: 4

Explanation:

Perform 4 operations on nums[1] = 9. Now, nums = [3, 5, 7].
The sum is 15, which is divisible by 5.

Example 2:

Input: nums = [4,1,3], k = 4

Output: 0

Explanation:

The sum is 8, which is already divisible by 4. Hence, no operations are needed.

Example 3:

Input: nums = [3,2], k = 6

Output: 5

Explanation:

Perform 3 operations on nums[0] = 3 and 2 operations on nums[1] = 2. Now, nums = [0, 0].
The sum is 0, which is divisible by 6.

```
Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000
1 <= k <= 100

## My Thoughts
At first the problem looked like it might require manipulating individual elements, distributing operations across the array, or dealing with constraints on specific numbers. But once I stepped back and looked at what the operation actually does, the whole challenge simplified dramatically.

Every time I subtract 1 from any element, the total sum decreases by exactly 1. That means the only thing that matters is how far the current sum is from the nearest multiple of k — and since I'm only allowed to go down, I always move toward the next multiple below the sum.

So the real question becomes:
How many steps until the sum is divisible by k?
And the answer is simply the remainder: sum % k.

It ended up being much cleaner than I expected.

## What I Learned

- The operation affects the sum, not the structure of the array — focusing on the sum unlocks the solution.
- When you can only decrease values, the nearest valid target is always the multiple of k below the current sum.
- Any arrangement of subtract-1 operations from any elements leads to the same effect on the sum, which means this is essentially a modular arithmetic problem.
- The minimal number of operations is just:
sum % k
because that’s the smallest t such that (sum − t) is divisible by k.
 - Even though the examples show adjustments to individual elements, it’s all flavor — the math behind the scenes is extremely simple.