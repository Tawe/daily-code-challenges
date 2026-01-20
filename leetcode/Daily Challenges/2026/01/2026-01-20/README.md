# 2026-01-20

## Instructions
You are given an array nums consisting of n prime integers.

You need to construct an array ans of length n, such that, for each index i, the bitwise OR of ans[i] and ans[i] + 1 is equal to nums[i], i.e. ans[i] OR (ans[i] + 1) == nums[i].

Additionally, you must minimize each value of ans[i] in the resulting array.

If it is not possible to find such a value for ans[i] that satisfies the condition, then set ans[i] = -1.
 
```
Example 1:
Input: nums = [2,3,5,7]
Output: [-1,1,4,3]
Explanation:
For i = 0, as there is no value for ans[0] that satisfies ans[0] OR (ans[0] + 1) = 2, so ans[0] = -1.
For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 3 is 1, because 1 OR (1 + 1) = 3.
For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 5 is 4, because 4 OR (4 + 1) = 5.
For i = 3, the smallest ans[3] that satisfies ans[3] OR (ans[3] + 1) = 7 is 3, because 3 OR (3 + 1) = 7.

Example 2:
Input: nums = [11,13,31]
Output: [9,12,15]
Explanation:
For i = 0, the smallest ans[0] that satisfies ans[0] OR (ans[0] + 1) = 11 is 9, because 9 OR (9 + 1) = 11.
For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 13 is 12, because 12 OR (12 + 1) = 13.
For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 31 is 15, because 15 OR (15 + 1) = 31.
 ```

Constraints:

1 <= nums.length <= 100
2 <= nums[i] <= 1000
nums[i] is a prime number.

## My Thoughts

This problem was initially confusing because it introduces a new array (ans) that doesn’t exist yet and asks me to construct it based on a bitwise condition. The hardest part wasn’t writing code, it was understanding what the problem was actually asking.

Once I realized that ans[i] is a number I choose, and that I’m checking it against ans[i] + 1 using the bitwise OR operator, things started to click. The problem is really about finding a number x such that combining its binary representation with the binary representation of x + 1 produces a specific target value.

Brute forcing helped a lot here. Instead of trying to reason everything out in advance, looping through possible values and checking (x | (x + 1)) made the behavior of the OR operator very concrete. Seeing which values worked and which didn’t, helped build intuition quickly.

This felt like one of those problems where understanding why something works matters more than clever optimizations.

## What I Learned
	•	ans is not given, it’s an array you build by finding valid values.
	•	ans[i] and ans[i] + 1 are just two consecutive numbers you test.
	•	The bitwise OR (|) compares numbers bit by bit, setting a bit to 1 if either input has a 1.
	•	x | (x + 1) is always odd, which explains why some targets are impossible.
	•	Brute force is sometimes the best way to understand a problem before optimizing it.
	•	Minimizing ans[i] just means returning the first valid match you find.
	•	Bitwise problems often look intimidating but become manageable once you visualize binary behavior.
