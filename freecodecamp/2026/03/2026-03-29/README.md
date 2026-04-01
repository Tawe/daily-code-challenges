# 2026-03-29
[2026-03-29 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-29)

## Instructions
ISBN-10 Validator

Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens (`"-"`) and 10 other characters. After removing the hyphens (`"-"`):

- The first 9 characters must be digits, and
- The final character may be a digit or the letter `"X"`, which represents the number 10.

To validate it:

- Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
- Add all the results together.
- If the total is divisible by 11, it's valid.

## My Thoughts

This problem is a structured validation check with a checksum step.

The solution flow is:

- remove hyphens first so the input is easier to validate
- make sure the cleaned string has exactly 10 characters
- scan each position and apply the ISBN rules:
  - positions `0` through `8` must be digits
  - position `9` can be a digit or `"X"`
- compute the weighted sum as you go using `(index + 1)`

At the end, the ISBN is valid if the total is divisible by `11`.

This keeps the format validation and checksum validation together in one pass.

Time complexity: `O(n)`  
Space complexity: `O(1)` extra space

## What I Learned

- Identifier-validation problems often combine format rules with a checksum rule.
- Cleaning the input first can simplify the rest of the validation logic.
- Special-case characters like `"X"` are easiest to handle exactly where the rule allows them.
- Weighted-position sums are a common checksum pattern, so indexing carefully matters.
