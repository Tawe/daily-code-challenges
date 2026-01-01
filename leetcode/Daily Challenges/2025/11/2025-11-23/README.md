# 2025-11-23

## Instructions

Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.

```
Example 1:
Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

Example 2:
Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.

Example 3:
Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
```

Constraints:

1 <= nums.length <= 4 * 104
1 <= nums[i] <= 104

## My Thoughts

I started this problem by assuming I needed to “pick the right numbers,” but that turned out to be the wrong perspective. My first attempt was to sort the array and repeatedly subtract the smallest numbers until the total became divisible by 3. It felt intuitive, but the more I thought about it, the more it seemed off, I was removing numbers without understanding why they mattered. That approach actually breaks in several cases, because the optimal subset to remove is not always the smallest prefix of the sorted array.
Once I stepped back and reframed the problem as “make the sum divisible by 3 with the smallest possible sacrifice,” everything clicked. The remainder of a number modulo 3 ended up being the key structure in the problem, and suddenly there was no need for guesswork or iteration, just classify the numbers by remainder and remove the smallest offending pieces.

## What I Learned

- The optimal solution doesn’t involve choosing which numbers to keep, it involves removing the smallest amount needed to fix the total sum.
- Every number becomes completely defined by num % 3, and the entire problem can be solved by grouping numbers into remainder classes (0, 1, 2).
- To fix sum % 3, I never need to remove more than two numbers:
    - If sum % 3 === 1, remove one remainder-1 number or two remainder-2 numbers.
    - If sum % 3 === 2, remove one remainder-2 number or two remainder-1 numbers.
- Tracking just the two smallest numbers in each remainder class is enough, I don’t need full lists.
- This problem reinforced the power of remainder-based reasoning: sometimes a problem that looks combinatorial reduces to two tiny decisions driven by modular arithmetic.
- It also showed why naive greedy subtraction can fail, “smallest overall” doesn’t always equal “smallest remainder correction.”
