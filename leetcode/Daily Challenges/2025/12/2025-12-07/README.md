# 2025-12-07

## Instructions

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

```
Example 1:
Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:
Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 ```

Constraints:

0 <= low <= high <= 10^9

## My Thoughts

This challenge looked trivial on the surface, just count how many odd numbers exist between two bounds. My first instinct was to write a loop and check each number, and while that does produce the right answer, it completely ignores the constraints. With high going up to 1 billion, a linear iteration simply isn’t viable.
Once I started thinking about the problem more mathematically, I realized that the question isn’t really about the numbers themselves, but about understanding how odd numbers are distributed. Every pair of consecutive integers contains exactly one odd number, and that pattern never breaks. That shifted the problem from brute-force counting to recognizing that the count can be determined using arithmetic rather than iteration.
Even though my conditional solution passed and LeetCode marked it as “optimal,” I noticed it relied on intuition rather than using the clean closed-form formula for counting odds. It worked due to the structure of parity, not because it was the simplest or clearest solution. That distinction matters: a solution can be correct and efficient while still not being the best expression of the idea.
This challenge reminded me how small problems are often opportunities to reinforce deeper habits: stepping back, looking for patterns, and thinking like a mathematician rather than a machine.

## What I Learned

- Optimal doesn’t mean simplest.
My solution was O(1) and passed all tests, but the canonical formula is cleaner and more expressive.
- Parity follows a strict pattern.
Odd and even numbers alternate predictably, letting us count odds without iteration.
- Closed-form solutions beat conditional logic.
The one-liner
```Math.floor((high + 1) / 2) - Math.floor(low / 2)``
immediately expresses the number of odds ≤ high minus odds < low.
- Constraints matter.
Thinking in terms of billions quickly forces you out of “just loop it” territory and into mathematical reasoning.
- Small challenges are good opportunities to exercise precision.
Even when a problem is easy, choosing clarity and mathematical correctness builds better problem-solving instincts.
