# 2026-01-02
[2026-01-02 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-02)

## Instructions
Nth Fibonacci Number
Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

## My Thoughts

At first glance, the Fibonacci sequence feels like a simple math problem, but this challenge reinforced how clarity matters more than complexity. The hardest part wasn’t the math, it was interpreting what the problem meant by “nth.”

The problem statement looked straightforward, but the test cases revealed an important detail: the sequence was being treated as 1-indexed, even though Fibonacci is often taught as 0-indexed. That mismatch is subtle, easy to miss, and responsible for many “almost correct” solutions.

I also appreciated how this problem rewards iterative thinking over clever tricks. A clean loop with two variables is far more readable and reliable than recursion or premature optimization.

## What I Learned
	•	Indexing assumptions matter
“Nth” can mean different things depending on context. Always confirm expectations using examples or test cases.
	•	Simple solutions are often optimal
An O(n), O(1) iterative solution is more than sufficient here and is exactly what most challenges expect.
	•	You only need the last two values
Fibonacci doesn’t require storing a list or recursion, tracking two rolling values is enough.
	•	Off-by-one errors aren’t mistakes, they’re signals
When logic is correct but results are shifted, it usually points to interpretation, not implementation.
	•	Test cases are part of the problem
They don’t just verify your answer — they define the contract.