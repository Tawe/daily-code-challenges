# 2026-01-20
[2026-01-20 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-20)

## Instructions
Consonant Case
Given a string representing a variable name, convert it to consonant case using the following rules:

- All consonants should be converted to uppercase.
- All vowels (a, e, i, o, u in any case) should be converted to lowercase.
- All hyphens (-) should be converted to underscores (_).

## My Thoughts

This problem was straightforward in terms of requirements, but it encouraged thinking carefully about ordering of transformations. I needed to apply multiple rules to the same string, and the key was making sure that one transformation didn’t accidentally undo another.

Using regular expressions felt like a natural fit because the rules are character-based and clearly separated: hyphens, vowels, and consonants all get treated differently. Breaking the work into steps made the solution easy to reason about and debug.

I also liked that this problem reinforced that clarity can matter more than cleverness. Even though everything could be done in a single pass, handling each rule explicitly made the intent of the code obvious.

## What I Learned
	•	The order of operations matters when transforming strings.
	•	Regex substitutions are a clean way to apply rules to specific character sets.
	•	Separating vowels and consonants explicitly avoids edge-case confusion.
	•	Readability can be more valuable than micro-optimizations for problems like this.
	•	It’s often clearer to transform a string in multiple passes rather than forcing everything into one complex expression.
	•	Regex character classes are powerful, but being explicit helps prevent mistakes.