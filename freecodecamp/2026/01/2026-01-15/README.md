# 2026-01-15
[2026-01-15 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-15)

## Instructions
Array Swap
Given an array with two values, return an array with the values swapped.

For example, given ["A", "B"] return ["B", "A"].

## My Thoughts

This was a very straightforward challenge, and the simplicity was the main point. Since the array is guaranteed to contain exactly two values, there’s no need for conditionals, loops, or defensive checks. The direct swap approach is clear and immediately communicates intent.

Using Python’s tuple unpacking makes the solution both concise and expressive. It avoids temporary variables and reads almost like plain English: “swap the first and second elements.” For a problem like this, clarity beats cleverness, and this solution hits that balance well.

## What I Learned
	•	Python’s tuple unpacking is an elegant and safe way to swap values.
	•	When constraints are tight (exactly two elements), you don’t need to generalize the solution.
	•	Mutating the array in place can be perfectly acceptable when the problem statement allows it.
	•	Some challenges are about knowing the language well, not about algorithms.
	•	The most optimal solution is often the one that is easiest to read and understand.