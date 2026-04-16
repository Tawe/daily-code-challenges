# 2026-04-14
[2026-04-14 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-14)

## Instructions
Last Letter

Given a string, return the letter from the string that appears last in the alphabet.

- If two or more letters tie for the last in the alphabet, return the first one.
- Ignore all non-letter characters.

## My Thoughts

This challenge is a clean single-pass string scan. The main idea is to keep track of the best letter seen so far while ignoring anything that is not alphabetic.

The JavaScript solution compares letters using their lowercase version so uppercase and lowercase characters are ranked the same alphabetically. When a character is not a letter, it gets skipped. When a valid letter is later in the alphabet than the current best, the solution updates both the lowercase comparison value and the original character to return.

The tie rule is handled naturally by only updating when the new letter is strictly greater than the current best. If the same best letter appears again later, the first one stays in place.

Time complexity: `O(n)`  
Space complexity: `O(1)`

## What I Learned

- Normalizing letters with `toLowerCase()` makes comparisons case-insensitive without losing the original character.
- Using a strict `>` comparison is a simple way to preserve the first occurrence during ties.
- Filtering non-letter characters before comparing keeps the main logic focused and avoids accidental ordering issues with punctuation or spaces.
