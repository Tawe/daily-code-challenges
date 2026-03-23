# 2026-03-23
[2026-03-23 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-23)

## Instructions
No Consecutive Repeats

Given a string, determine if it has no repeating characters.
- A string has no repeats if it does not have the same character two or more times in a row.

## My Thoughts

This is a direct adjacent-character comparison problem.

The idea is simple:

- scan the string from left to right
- compare each character with the one immediately after it
- if any pair matches, return `False`
- if the scan finishes without a match, return `True`

Since only consecutive repeats matter, there is no need for a set or frequency count.

Time complexity: `O(n)`  
Space complexity: `O(1)`

## What I Learned

- When the condition only involves neighboring characters, a single adjacent scan is enough.
- This is different from “all characters unique” because repeated characters are allowed as long as they are not consecutive.
- Early return on the first failing pair keeps the solution efficient and easy to read.
- Problems with local constraints often do not need heavier tools like hash sets.
