## Instructions

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 
```yaml
Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
 ```

Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104

## My Thoughts
At first, this problem looked straightforward: find the duplicate and find the missing number. My instinct was to check whether each index matched the value it “should” have and treat mismatches as the missing value. That made sense for a sorted array, but I quickly realized the input isn’t guaranteed to be sorted, which makes index-based comparison unreliable.

I also reached for a simple .filter() + indexOf() approach to detect duplicates, which worked on small tests but had hidden inefficiencies. Side by side, the overall solution felt a bit fragile, and edge cases made it clear that I wasn’t capturing the true structure of the problem.

The challenge forced me to rethink the data rather than the positions: this is fundamentally a frequency question, not an index ordering question.

## What I learned

- The array is not sorted, so I can’t rely on nums[i] !== i + 1 to detect the missing number, ordering-based logic breaks on many inputs.
- Problems involving “duplicates” and “missing values from a known range” are cleanly solved with frequency counting, not positional checks.
- Using filter with indexOf is O(n²), which becomes expensive at the upper constraints (10,000 elements). A single O(n) frequency pass is far more scalable.
- The key observation is simple but important:
    - If a number appears twice, it’s the duplicate.
    - If a number appears zero times, it’s the missing value.
- Once I reframed the problem around the range 1…n instead of the array order, the solution became both simpler and more reliable.
- This was a good reminder that when the input comes from a corrupted or altered version of a known perfect sequence, counting occurrences is usually the most stable strategy.