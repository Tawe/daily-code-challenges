# 2026-01-01

## Instructions

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

```
Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Example 3:
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

## My Thoughts

My first instinct was to convert the array of digits into a number, add one, and then convert it back into an array. This felt natural because it mirrors how I’d solve the problem mentally. For small inputs, this approach works and is very concise.
However, once I thought about the constraints more carefully, I realized this solution relies on JavaScript’s Number type, which has precision limits. Even though the input size seems reasonable, representing very large numbers as a Number can silently produce incorrect results.
The problem is really about digit manipulation, not arithmetic on a single number. Treating it that way makes the solution both safer and more aligned with how numbers are represented internally.

## What I Learned

- JavaScript Number is not safe for very large integers; algorithmic problems often expect you to avoid numeric conversion.
- Problems involving digit arrays usually want manual carry handling, similar to how addition is done on paper.
- Iterating from the end and stopping early when no carry is needed leads to a clean and efficient solution.
- An optimal solution isn’t just about passing test cases—it’s about being correct under all constraints.
- Sometimes the simplest-looking solution is a trap, and reading constraints carefully matters more than clever shortcuts.
