# 2025-12-24
[2025-12-24 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-24)

## Instructions
Markdown Image Parser
Given a string of an image in Markdown, return the equivalent HTML string.

A Markdown image has the following format: "![alt text](image_url)". Where:

alt text is the description of the image (the alt attribute value).
image_url is the source URL of the image (the src attribute value).
Return a string of the HTML img tag with the src set to the image URL and the alt set to the alt text.

For example, given "![Cute cat](cat.png)" return '<img src="cat.png" alt="Cute cat">';

Make sure the tag, order of attributes, spacing, and quote usage is the same as above.
Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.

## My Thoughts

This challenge was a good example of when regular expressions are actually the right tool for the job. The input format is very strict and well-defined, so instead of manually parsing the string, a single regex capture was enough to extract everything I needed.

I focused on making sure the output HTML matched the required format exactly — especially the attribute order, spacing, and quotation marks. Small formatting differences would break the expected result even if the logic was otherwise correct.

It was also interesting to think about how much the problem assumes valid input. Given that assumption, the solution can stay very compact and readable without extra defensive checks.

## What I Learned
	•	Regex is well-suited for parsing strict, predictable formats like Markdown image syntax.
	•	Non-greedy captures (.*?) help avoid overmatching when multiple delimiters exist.
	•	Output formatting matters just as much as logic when a problem specifies exact string output.
	•	String.replace() with capture groups can be cleaner than manual substring extraction.
	•	It’s important to understand when it’s okay to rely on problem guarantees and when to add validation.