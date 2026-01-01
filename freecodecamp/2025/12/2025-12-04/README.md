# 2025-12-04
[2025-12-04 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-04)

## Instructions



## My Thoughts

At first, the idea of using factorials to count permutations felt abstract. I kept thinking I needed to divide the total by the string length or multiply the unique letters by something. But once I stepped back and focused on what factorial actually represents, the problem clicked. Factorial is just the number of ways you can arrange N distinct items. If every character in the string were unique, the total number of permutations would simply be n!. The challenge comes from repeated characters — because swapping identical characters doesn't create new permutations. That’s why the formula divides by the factorial of each repeated count. It’s not arbitrary math; it’s removing duplicate arrangements created by the repeats. Once I understood that, the structure of the solution became obvious:
- Compute factorial(total length).
- Count how many times each character appears.
- Divide by factorial(count) for each character. The factorial function itself is simpler than I expected, just a linear loop from 2 to n. I initially thought it might be inefficient or O(n²), but it’s actually O(n) and completely optimal for this use case.

## What I Learned

- Factorials represent arrangements, n! is the number of ways to arrange n distinct items.
- Repeated characters reduce permutations in a combinatorial way, not a linear way.
- The correct formula is $$
\frac{n!}{a! \cdot b! \cdot c! \cdots}
$$ where a, b, c are counts of repeated characters.
- You never divide by the string length; the only things you divide by are factorials of repeat counts.
- The factorial function I wrote is actually O(n) and optimal, each number is visited once.
- Building a frequency map makes the denominator calculation simple and clean.
- After understanding the reasoning, the problem becomes straightforward and even elegant.
