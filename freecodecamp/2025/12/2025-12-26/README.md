# 2025-12-26
[2025-12-26 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-26)

## Instructions

Sum of Divisors
Given a positive integer, return the sum of all its divisors.
- A divisor is any integer that divides the number evenly (the remainder is 0).
- Only count each divisor once.
For example, given 6, return 12 because the divisors of 6 are 1, 2, 3, and 6, and the sum of those is 12.

## My Thoughts

My initial solution focused on clarity and correctness by checking every number from 1 through n to see if it was a divisor. That approach works well conceptually and makes the definition of a divisor very explicit, which is helpful when first thinking about the problem. However, stepping back and thinking about how divisors actually behave revealed that this was doing more work than necessary. Every divisor comes with a complementary pair, which means checking all the way up to n isn’t required. This was a good example of how a correct solution isn’t always an optimal one, and how understanding the mathematical structure of a problem can lead to better performance.

## What I Learned

- Divisors always come in pairs (i and n / i).
- You only need to check up to √n to find all divisors.
- Correctness and efficiency are separate concerns, a solution can be right but slow.
- Simple mathematical observations can dramatically improve performance.
- Optimization often comes from understanding why something works, not just making it work.
