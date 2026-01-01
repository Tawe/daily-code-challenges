# 2025-12-30
[2025-12-30 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-30)

## Instructions

Sum the String
Given a string containing digits and other characters, return the sum of all numbers in the string.
- Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
- Ignore any non-digit characters.

## My Thoughts

This problem was a good example of when regular expressions can simplify what would otherwise be more verbose parsing logic. Grouping consecutive digits with a single regex made it easy to treat multi-digit numbers correctly without manually tracking state. However, thinking through edge cases revealed a small but important oversight: when the input string contains no digits at all, match() returns null. That reminded me that even clean-looking one-liners need defensive handling when dealing with optional results. Overall, the problem emphasized correctness and robustness more than performance, since scanning the string once is already optimal.

## What I Learned

- Regular expressions are very effective for extracting structured data from strings.
- Consecutive digits should be treated as a single number, not individual characters.
- Built-in methods like match() can return null, so edge cases matter.
- A solution can be optimal in complexity but still fail due to unhandled input cases.
- Sometimes a tiny fix is all that’s needed to make a solution production-ready.
