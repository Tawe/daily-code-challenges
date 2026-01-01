# Q3. Max Consecutive Ones

## Instructions

Given a binary array nums, return the maximum number of consecutive 1's in the array.

```
### Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
### Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 ```

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.

```

## My Thoughts


This problem looks simple on paper—just find the longest run of 1’s in a binary array—but it’s surprisingly easy to overthink the edge cases. My first attempt tried to handle “end of array” situations manually, and that’s exactly where the logic got messy. The key realization is that you don’t need special rules for boundaries at all. You just track a running streak, reset it on zero, and update the max streak as you go. Once I stripped it down to that straightforward pattern, the solution became much cleaner.


## What I Learned

- Even for very simple array problems, it’s easy to introduce bugs when you try to manually manage edge conditions. Often the simplest loop with consistent rules works best.
- The core pattern is:
increment on 1, reset on 0, update max while iterating — this eliminates the need for checking the final element separately.
- Updating the max inside the loop instead of only at breakpoints produces more reliable logic and avoids missing streaks at the end of the array.
- This is a classic example of “don’t fight the problem”—write the code that matches the simplest mental model, not the most complicated one.
