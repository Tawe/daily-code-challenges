# 2026-03-11
[2026-03-11 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-11)

## Instructions
Word Length Converter

Given a string of words, return a new string where each word is replaced by its length.

- Words in the given string will be separated by a single space
- Keep the spaces in the returned string.

For example, given `"hello world"`, return `"5 5"`.

## My Thoughts

This challenge is a direct string transformation:

- split the input by spaces to get words
- compute `len(word)` for each word
- join those lengths back with spaces

Your solution does this with a loop and a running result string, handling the first value separately so spacing stays correct.

That keeps the output format exactly aligned with the input spacing rule (single spaces between words).

Time complexity: `O(n)`  
Space complexity: `O(n)` for the output string.

## What I Learned

- Many string-conversion challenges follow a simple split -> transform -> join pattern.
- `len()` on each token is enough to convert words to their character counts.
- Being explicit about spacing in reconstruction avoids formatting bugs in the final string.
