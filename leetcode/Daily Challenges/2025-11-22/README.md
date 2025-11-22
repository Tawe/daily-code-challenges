# 2025-11-22

## Instructions
You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.

 
```yaml
Example 1:

Input: nums = [1,2,3,4]

Output: 3

Explanation:

All array elements can be made divisible by 3 using 3 operations:

Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.
Example 2:

Input: nums = [3,6,9]

Output: 0
```
 

Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50


## My Thoughts

At first, I overcomplicated the problem by trying to figure out whether each number needed to go “up” or “down” to reach the nearest multiple of 3. I kept thinking in terms of looking at neighbors, subtracting and adding, and checking which is closer. But once I stepped back, I realized that the modulo operation already encodes all the distance information I needed.

The problem looks like a number-manipulation puzzle, but it’s really a remainder puzzle. Every number fits cleanly into one of three buckets, and each bucket has a predictable cost. Once I saw that pattern, the solution became almost trivial.

## What I Learned

- The modulo operation (num % 3) doesn't just tell you divisibility, it tells you how far you are from the nearest divisible number.
- If a number gives:
    - 0 → it’s already divisible → cost 0
    - 1 → it's 1 above a multiple → best move is subtract 1 → cost 1
    - 2 → it's 1 below a multiple → best move is add 1 → cost 1
- Because the remainder can only be 0, 1, or 2, each element has a fixed, constant cost. That means the whole solution is simply summing these small adjustments.
- A problem that looks like it requires searching for the “closest neighbor” actually reduces to a simple pattern recognition based on remainders.
- This was a good reminder to let the mathematical properties of the operation guide the solution, instead of manually simulating adjustments.