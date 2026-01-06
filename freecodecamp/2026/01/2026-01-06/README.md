# 2026-01-06
[2026-01-06 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-06)

## Instructions
vOwElcAsE
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

- Vowels are "a", "e", "i", "o", and "u" in any case.
- Non-alphabetical characters should remain unchanged.

## My Thoughts

At first, this problem seemed simple: uppercase vowels, lowercase everything else. My initial approach worked for basic cases, but it relied on repeatedly calling replace() on the string, which made the logic harder to reason about and less efficient.

When I tried edge cases like mixed casing and non-alphabetical characters, it became clear that the solution needed to be more deliberate about how each character was handled. The key was realizing that I should make decisions per character, rather than transforming the whole string and then trying to patch it afterward.

Once I rewrote the solution to process the string one character at a time, the behavior became predictable. Checking against ch.lower() made the logic consistent regardless of the original casing, and explicitly leaving non-alphabetical characters unchanged avoided subtle bugs.

This challenge was a good reminder that string manipulation problems often look easier than they are, especially when casing rules are involved.


## What I Learned
	•	Rebuilding strings repeatedly with replace() can lead to inefficient and fragile solutions.
	•	Processing strings character-by-character is often clearer and safer.
	•	Using lower() as a normalization step simplifies conditional logic.
	•	Explicitly handling non-alphabetical characters prevents edge-case bugs.
	•	Passing all provided examples is not enough — custom edge cases are essential for validating correctness.
	•	Clean, predictable logic is usually better than clever shortcuts in string problems.
