# 2025-12-23
[2025-12-23 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-23)

## Instructions
Re: Fwd: Fw: Count
Given a string representing the subject line of an email, determine how many times the email has been forwarded or replied to.

For simplicity, consider an email forwarded or replied to if the string contains any of the following markers (case-insensitive):
- "fw:"
- "fwd:"
- "re:"
Return the total number of occurrences of these markers.'

## My Thoughts

This problem felt very straightforward once I recognized that it was really just a string-search task. Since the markers are fixed patterns and case-insensitive, a regular expression was the natural solution.

My first instinct was to use match() and count the results, which works well in most cases. However, thinking through edge cases made me realize that I needed to handle situations where no markers are present at all. That small detail is easy to miss when the problem seems simple.

I also learned that even in a short regex, the order of alternatives can matter more than it first appears.


## What I Learned
	•	Regular expressions are often the cleanest way to solve pattern-counting problems.
	•	String.match() can return null, so defensive checks matter even in simple code.
	•	Regex alternation order (fwd: before fw:) can affect correctness.
	•	Case-insensitive matching (/i) avoids unnecessary string normalization.
	•	Even “easy” problems benefit from thinking through edge cases.
