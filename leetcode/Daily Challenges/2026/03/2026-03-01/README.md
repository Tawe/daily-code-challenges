# 2026-03-01

## Instructions
A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

```
Example 1:
Input: n = "32"
Output: 3
Explanation: 10 + 11 + 11 = 32

Example 2:
Input: n = "82734"
Output: 8

Example 3:
Input: n = "27346209830709182346"
Output: 9
```

Constraints:

1 <= n.length <= 105
n consists of only digits.
n does not contain any leading zeros and represents a positive integer.

## My Thoughts

This one collapses fast once you think about what a deci-binary number can contribute at each digit position.

Since each deci-binary number can only place a `0` or `1` in any position, a digit like `7` in `n` means we need at least `7` different numbers contributing `1` in that column.

That gives the lower bound immediately:

- The answer must be at least the largest digit in the string

And it turns out that bound is also enough:

- If the largest digit is `d`, we can always build `d` deci-binary numbers whose column sums match every digit of `n`
- For any digit `x`, just let exactly `x` of those `d` numbers have a `1` in that position

So the whole problem reduces to scanning the string and returning the maximum digit.

That’s exactly what the Go solution does:

- Track the largest rune seen so far
- Convert that digit character back to its integer value at the end

Time complexity is `O(n)` and space complexity is `O(1)`.

## What I Learned

- Sometimes the minimum number of constructed values is determined by a single bottleneck digit.
- A digit-wise constraint can be much more important than the full numeric value.
- If each number can contribute at most `1` per column, the largest digit directly tells us how many numbers are required.
- This is a good example of replacing “construction” thinking with a simpler counting argument.
