# 2025-11-30

## Instructions
Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.

 
```yaml
Example 1:
Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.

Example 2:
Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.

Example 3:
Input: nums = [1,2,3], p = 3
Output: 0
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.
 ```

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= p <= 109

## My Thoughts

This problem looked like a brute-force sliding window at first, but once I framed it in terms of modulo math, it completely changed. The challenge isn’t about scanning every possible subarray, it’s about finding a subarray whose sum has the exact remainder needed to “fix” the total sum.

The prefix-sum trick made the problem click: the subarray I remove is just the difference between two prefix sums. That gave me a way to rewrite the problem into “match the right modular value.”

The part that tripped me up was the detail of storing prefix mods in the hashmap. I initially kept the earliest index for each modulo value, but that actually forces longer subarrays. The correct way — storing the latest index, gives shorter subarrays because I'm shrinking the distance i - j, not expanding it.

Once I understood that piece, everything fell into place.

## What I Learned
- Removing a subarray with a specific remainder % p is the key to making the total divisible by p.
- Prefix sums let you compute any subarray’s sum by subtraction, and the modular version of that subtraction works exactly the same.
- The equation to find a matching prefix mod is:
```js
prefix[j] % p === (prefix[i] - rem + p) % p
``
- The tricky part is which index to store in the map:
    - Storing the earliest index gives longer subarrays.
    - Storing the latest index gives the shortest possible subarray, which is exactly what the problem is asking for.
- Hashmaps + prefix sums create a powerful pattern for “find the shortest subarray with property X,” and this problem is a perfect example of it.
- Even when the overall approach is correct, tiny details like index selection can completely break the result. This was a great reminder to reason through how indices affect lengths.