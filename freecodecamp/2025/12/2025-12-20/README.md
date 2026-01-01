# 2025-12-20
[2025-12-20 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-20)

## Instructions

Purge Most Frequent
Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.
- If multiple values are tied for most frequent, remove all of them.
- Do not change any of the other elements or their order

## My Thoughts

My initial approach focused on quickly identifying the most frequent value and removing it by converting the array into a string and using replaceAll. While this felt concise, it relied on implicit string conversion and assumed that array values could safely be treated as characters. Thinking more carefully about the problem, I realized that converting the array to a string fundamentally changes the data and can introduce subtle bugs—especially with multi-digit numbers, mixed data types, or values that stringify in unexpected ways. I also noticed that my solution only removed one most-frequent value, even though the problem requires removing all values tied for highest frequency. Re-evaluating the requirements made it clear that the solution should operate directly on the array rather than through a string representation.

## What I Learned

- Converting data structures into strings for convenience can introduce correctness issues.
- Preserving the original data type and structure is often safer and clearer.
- Frequency-based problems are naturally solved with a counting pass followed by a filtering pass.
- Using a Map (or object) for counting provides clarity and avoids edge cases.
- A solution can look concise but still be incorrect if it violates problem constraints.
- Optimal solutions often favor clarity and correctness over clever shortcuts.
