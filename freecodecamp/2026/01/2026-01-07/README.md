# 2026-01-07
[2026-01-07 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-07)

## Instructions
Markdown Unordered List Parser
Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

An unordered list consists of one or more list items. A valid list item appears on its own line and:

- Starts with a dash ("-"), followed by
- At least one space, and then
- The list item text.

The list is given as a single string with new lines separated by the newline character ("\n"). Do not include the newline characters in the item text.

Wrap each list item in HTML li tags, and the whole list of items in ul tags.

For example, given "- Item A\n- Item B", return "<ul><li>Item A</li><li>Item B</li></ul>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

## My Thoughts

This challenge was mainly about carefully translating a structured Markdown format into its HTML equivalent. Once I understood that each list item always starts on its own line with - , the problem became a straightforward parsing exercise.

Splitting the input by newlines made it easy to process each item independently. From there, extracting the text after the dash and space was simple, and building the final HTML string with join helped keep the code clean and readable.

There wasn’t much algorithmic complexity here, the main focus was correctness and faithfully following the format rules rather than trying to be clever.

## What I Learned
	•	Many parsing problems become much simpler when you break the input into logical units (lines, tokens, etc.).
	•	When converting formats (Markdown → HTML), clarity is often more important than micro-optimizations.
	•	join is a great way to assemble structured output without messy string concatenation.
	•	Carefully reading formatting rules (like required spaces) prevents subtle bugs.
	•	A linear pass over the data is often both the simplest and most optimal solution.