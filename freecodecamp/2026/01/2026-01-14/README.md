# 2026-01-14
[2026-01-14 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-14)

## Instructions
Markdown Link Parser
Given the string of a link in Markdown, return the equivalent HTML string.

A Markdown image has the following format: "[link_text](link_url)". Return the string of the HTML a tag with the href set to the link_url and the link_text as the tag content.

For example, given "[freeCodeCamp](https://freecodecamp.org/)" return '<a href="https://freecodecamp.org/">freeCodeCamp</a>';

Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.

## My Thoughts

This challenge felt very clean and focused. Once I recognized that the input format was guaranteed to be valid Markdown for a link, the problem became more about pattern matching than defensive parsing.

Using a regular expression made a lot of sense here. The Markdown syntax is well-defined — text inside [] followed by a URL inside (), so capturing those two parts and reformatting them into an HTML <a> tag is straightforward. The lambda approach keeps everything compact and readable without needing multiple steps or intermediate variables.

I also liked that this solution naturally supports replacing the Markdown link even if it appears inside a larger string, not just when the input is exactly one link.

## What I Learned
	•	Regular expressions are a good fit when the input format is strict and predictable.
	•	Capturing groups ((.*?)) are an effective way to extract structured pieces of a string.
	•	re.sub with a lambda is a powerful pattern for transforming text formats in one pass.
	•	When constraints guarantee valid input, you can avoid overengineering and keep the solution elegant.
	•	Parsing Markdown often becomes much simpler when you scope the problem to one specific syntax rule instead of the entire spec.