# 2025-12-08

## Instructions
A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

 
```yaml
Example 1:
Input: n = 5
Output: 2
Explanation: The square triples are (3,4,5) and (4,3,5).

Example 2:
Input: n = 10
Output: 4
Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).
```

Constraints:

1 <= n <= 250

## My Thoughts

This problem looked straightforward at first: count the number of integer triples (a, b, c) such that a² + b² = c² and each value is between 1 and n. My instinct was that there had to be a clever shortcut, maybe something with modulus, maybe avoiding the nested loops entirely. But as soon as I thought through the structure of Pythagorean triples, I realized that the real challenge was not algorithmic trickery… it was understanding what the prompt literally asks for.

Unlike many math problems, this one doesn’t ask for primitive triples or distinct triples. It doesn't limit a ≤ b or require sorting. It counts all ordered pairs (a, b) that form a valid c, as long as 1 ≤ a,b,c ≤ n.

That means there’s no real alternative to examining all combinations of (a, b), the symmetry or mathematical properties don’t reduce the search space. The optimal approach is exactly what it feels like: two loops for a and b, compute c, and check if c² = a² + b².

The tricky part wasn’t performance — it was correctness. The bugs that emerged (starting loops at 0, using c²² instead of √c², forgetting to declare variables) were subtle because the code structure looked right, even though the math wasn’t. It was a great reminder of how easy it is to misapply an operation when translating algebra into code.

In the end, the problem wasn’t about optimization at all. It was about correctly mapping a mathematical definition into a clean, exact implementation.

## What I Learned
- The brute force structure of the problem is already optimal.
Since a and b can be any integers from 1 to n, you must consider all pairs. There's no mathematical shortcut that reduces the loops without changing the definition.
- Translating equations into code requires precision.
I accidentally computed c = (a² + b²)² instead of c = √(a² + b²). The code shape looked correct, so the error didn’t stand out, a reminder that even simple formulas can go wrong when written in code.
- Constraints matter more than instinct.
The problem explicitly requires 1 ≤ a, b, c, which means starting loops at 0 creates invalid triples.
- Declare variables explicitly.
Omitting let created an unintended global c. It still “worked,” but it's exactly the kind of bug that causes chaos later.
- Math problems can still be coding problems.
Even though the concept is classic, the implementation is where most mistakes occur.
- Sometimes the optimal solution is the simple one.
After trying to outsmart the problem, I ended up right back at the clean O(n²) method and that’s okay. Not every problem needs cleverness.