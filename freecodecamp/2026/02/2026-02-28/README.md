# 2026-02-28
[2026-02-28 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-28)

## Instructions
Add Punctuation
Given a string of sentences with missing periods, add a period (".") in the following places:

- Before each space that comes immediately before an uppercase letter
- And at the end of the string

Return the resulting string.



## My Thoughts

I approached this by splitting the string into words and scanning from left to right.

For each word:

- If it is not the first word
- And its first character is uppercase
- Then the previous word should end with a period

After the loop, the final word always needs a period as well.

That matches the punctuation rule cleanly without needing to rebuild sentence boundaries in a more complex way.

The implementation does this in three steps:

- Split the input string by spaces
- Update the previous word whenever the current word starts with an uppercase letter
- Add a period to the last word and join everything back together

Time complexity is `O(n)` over the number of words/characters processed.  
Space complexity is `O(n)` because `split()` creates an array of words.

## What I Learned

- Sometimes the simplest solution is to look one word ahead and modify the previous token.
- Checking capitalization with the first character is enough when the rule is based on word starts.
- Tokenizing with `split()` and rebuilding with `join()` keeps string-edit problems easy to reason about.
