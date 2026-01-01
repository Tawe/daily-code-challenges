# 2025-12-31
[2025-12-31 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-31)

## Instructions

Markdown Italic Parser
Given a string that may include some italic text in Markdown, return the equivalent HTML string.
- Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
- There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
- Convert all italic occurrences to HTML i tags and return the string.
For example, given "*This is italic*", return "<i>This is italic</i>".
Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

## My Thoughts

This problem felt like a good reminder that regex can be powerful but also fragile. My first instinct was to use a single regular expression to transform Markdown italics directly into HTML, and that approach actually works well for the problem’s constraints. I focused on enforcing the rules carefully: •	Only single * or _ •	No spaces touching the markers •	Allow spaces inside the italic text The solution felt concise and expressive, which is often a good sign for string-parsing challenges. However, stepping back, I realized that correctness isn’t just about passing examples it’s also about understanding where the solution might break depending on environment or edge cases.

## What I Learned

- Regex lookarounds are powerful but risky
Lookbehinds ((?<! )) aren’t supported everywhere. Even if a solution works locally, it might fail in older browsers or constrained environments.
- Markdown parsing is deceptively complex
Even “simple” rules (like italics) have edge cases. Real markdown parsers handle many more constraints than this challenge requires.
- Readable regex > clever regex
A slightly longer regex without lookbehind can be more maintainable and portable than a tightly packed one.
- Single-pass string transformations are optimal here
Using replace with a global regex is already O(n), which is as efficient as it gets for this type of problem.
- Constraints matter
Because the challenge clearly limits the syntax (no nested italics, no mixed markers), a regex-based solution is appropriate. In real-world parsing, this would likely require a tokenizer or parser.
