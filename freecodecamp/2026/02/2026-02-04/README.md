# 2026-02-04
[2026-02-04 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-04)

## Instructions
Truncate the Text
Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append "..." to the end of it (so it's 20 characters total) and return the result.

## My Thoughts

This problem is straightforward on the surface, but it’s easy to miss small formatting details if you rush. The logic itself—summing coin values and converting cents to dollars—is simple, but the real requirement is about producing exactly the right string format.

Your approach of first summing everything into total cents keeps the logic clean and avoids unnecessary conversions during the loop. Separating dollars and cents afterward makes the code easy to read and reason about.

Using padStart(2, '0') is a great touch. That’s exactly the kind of detail that prevents bugs like returning $3.5 instead of $3.05.

Overall, this feels like a solution written by someone who understands both the math and the output constraints.

## What I Learned
	•	It’s often best to normalize units first (everything in cents) before converting formats.
	•	Formatting output can be just as important as the algorithm itself.
	•	Math.floor(total / 100) cleanly extracts dollars from cents.
	•	Modulo (% 100) is perfect for extracting remaining cents.
	•	String formatting helpers like padStart prevent edge-case bugs.
	•	Small problems are often about precision and correctness, not cleverness.