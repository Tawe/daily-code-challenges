# 2025-12-17
[2025-12-17 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-17)

## Instructions

Markdown Blockquote Parser
Given a string that includes a blockquote in Markdown, return the equivalent HTML string.
A blockquote in Markdown is any line that:
- Starts with zero or more spaces
- Followed by a greater-than sign (>)
- Then, one or more spaces
- And finally, the blockquote text.
Return the blockquote text surrounded by opening and closing HTML blockquote tags.
For example, given "> This is a quote", return <blockquote>This is a quote</blockquote>.
Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

## My Thoughts

This initially felt like a regex issue, but it turned out to be more about fully understanding the input I was working with. I assumed I was parsing a < character when, in reality, Markdown blockquotes use >, a small mismatch that completely broke the logic. Once I slowed down and compared the regex to the actual string, the problem became obvious. It was a good reminder that when regex “doesn’t work,” the issue is often what I’m matching, not how I’m matching it. I also realized how easy it is to over-focus on replacement syntax ($1, $2) without first confirming that a capture group actually exists.

## What I Learned

- Regex replacements require capture groups if you want to reference $1, $2, etc.
- The ^ anchor is essential when you only want to match content at the start of a string or line.
- Markdown blockquotes use >, not <, and assumptions about input formats can silently break logic.
- The m (multiline) flag allows ^ and $ to work line-by-line, which is critical for parsing markdown.
- When debugging regex: - First confirm the pattern matches the input - Then confirm capture groups exist - Only then worry about replacement logic
