# 2026-01-29
[2026-01-29 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-29)

## Instructions

Letters-Numbers
Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.

## My Thoughts

This problem felt very approachable because it’s really about detecting a boundary, not transforming the characters themselves. The key idea is noticing when the string switches categories — from letters to numbers or numbers to letters and inserting a hyphen right at that boundary. Using a regular expression made this much cleaner than trying to loop through characters manually and keep track of the previous type. Once I framed it as “find a letter immediately followed by a number,” the solution almost wrote itself. This was a good reminder that regex isn’t just for validation, it’s extremely powerful for structural transformations in strings when the pattern is clear.

## What I Learned

- Many string problems are really about transitions, not individual characters.
- Regular expressions are great for spotting adjacent patterns without extra state or loops.
- Capturing groups ((...)) let you reinsert the original characters exactly where you want them.
- re.sub is a concise way to express “find this boundary and insert something between.”
- Thinking in terms of patterns instead of steps often leads to simpler solutions.
- Even small problems like this help build intuition for when regex is the right tool.
