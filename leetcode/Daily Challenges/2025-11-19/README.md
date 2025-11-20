# 2025-11-19

## Instructions
You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:

If original is found in nums, multiply it by two (i.e., set original = 2 * original).
Otherwise, stop the process.
Repeat this process with the new number as long as you keep finding the number.
Return the final value of original.

 
```yaml
Example 1:

Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.
Example 2:

Input: nums = [2,7,9], original = 4
Output: 4
Explanation:
- 4 is not found in nums. Thus, 4 is returned.
 ```

Constraints:

1 <= nums.length <= 1000
1 <= nums[i], original <= 1000


## My Thoughts

This problem is straightforward, but it highlights an important pattern: sometimes the simplest iterative approach is exactly what the problem expects. The logic is basically “keep doubling as long as the number exists,” which feels almost like simulating a chain reaction.

My first instinct was to rely on nums.includes() inside a loop, and for a problem this small, that’s perfectly fine. With constraints capped at 1000 elements, there’s no need to overthink performance. The problem ends up being more about translating the description into a clean loop than finding a clever trick.

## What I Learned
- Not every problem needs optimization, sometimes a direct implementation is the ideal solution.
- JavaScript’s includes() makes membership checks easy, but using a Set can make the intent clearer and reduce lookups to O(1) if needed.
- The logic of the problem reinforces a common algorithmic pattern:
“repeat an operation until a condition fails.”
- Problems like this are good practice for thinking in steps and writing code that mirrors a process described in plain English.