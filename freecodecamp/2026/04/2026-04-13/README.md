# 2026-04-13
[2026-04-13 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-13)

## Instructions
Name Initials

Given a full name as a string, return their initials.

- Names to initialize are separated by a space.
- Initials should be made uppercase.
- Initials should be separated by dots.

For example, `"Tommy Millwood"` returns `"T.M."`.

## My Thoughts

This one is very direct. The string just needs to be split into separate name parts, then I take the first character of each part, uppercase it, and append a dot.

The JavaScript solution does exactly that:

- split the full name by spaces
- loop through each word
- take `names[i][0]`
- convert it to uppercase
- add `"."` after each initial

Because each name part contributes exactly one character to the result, the logic stays small and easy to follow.

Time complexity: `O(n)`  
Space complexity: `O(n)` because of the split array and output string

## What I Learned

- A lot of string problems are just "split, transform, join" in a slightly disguised form.
- Even simple formatting requirements like uppercase letters and trailing dots are easier to get right when handled in one consistent loop.
- For lightweight parsing tasks, a plain iterative solution is often clearer than trying to compress everything into a chained expression.
