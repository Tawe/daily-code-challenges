# 2025-12-19
[2025-12-19 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-19)

## Instructions
Pairwise
Given an array of integers and a target number, find all pairs of elements in the array whose values add up to the target and return the sum of their indices.

For example, given [2, 3, 4, 6, 8] and 10, you will find two valid pairs:

- 2 and 8 (2 + 8 = 10), whose indices are 0 and 4
- 4 and 6 (4 + 6 = 10), whose indices are 2 and 3

Add all the indices together to get a return value of 9.

## My Thoughts

My first instinct was to use a nested loop and check every possible pair of numbers. That approach is straightforward and easy to reason about, and it works for small inputs and simple examples.

However, after thinking more carefully about the problem rules, I realized that each element can only be used once. My initial solution didn’t enforce that constraint and would overcount pairs when multiple combinations reused the same indices.

That forced me to rethink the problem. Instead of looking at all possible pairs, I needed a way to remember which values had already been seen and whether they could form a valid pair with the current element—while also making sure each index was only used once.

Reframing the problem as a single pass with a lookup structure made the solution both cleaner and more efficient.

## What I Learned
- A correct solution isn’t just about matching examples—it must follow all problem constraints.
- Nested loops are often the easiest starting point, but they can hide both performance issues and logical mistakes.
- Using a map to track previously seen values allows pair-matching problems to be solved in linear time.
- Enforcing “use each element once” requires explicitly removing or marking elements after they are paired.
- Reading challenge descriptions carefully can reveal hidden constraints that fundamentally change the solution.