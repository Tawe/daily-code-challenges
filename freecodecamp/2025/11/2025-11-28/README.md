# 2025-11-28
[2025-11-28 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-28)

## Instructions

Word Guesser
Given two strings of the same length, a secret word and a guess, compare the guess to the secret word using the following rules:
The secret word and guess will only consist of uppercase letters ("A" to "Z");
For each letter in the guess, replace it with a number according to how it matches the secret word:
"2" if the letter is in the secret word and in the correct position.
"1" if the letter is in the secret word but in the wrong position.
"0" if the letter is not in the secret word.
Each letter in the secret word can be used at most once.
Exact matches ("2") are assigned first, then partial matches ("1") are assigned from left to right for remaining letters.
If a letter occurs multiple times in the guess, it can only match as many times as it appears in the secret word.
For example, given a secret word of "APPLE" and a guess of "POPPA", return "10201":
The first "P" is not in the correct location ("1"), the "O" isn't in the secret word ("0"), the second "P" is in the correct location ("2"), the third "P" is a zero ("0") because the two "P"'s in the secret word have been used, and the "A" is not in the correct location ("1").

## My Thoughts

This one looked simple at first because the rules sound straightforward: “2” for exact matches,
“1” for partial matches,
“0” otherwise. But once I started thinking about duplicate letters and the rule that each letter can only be used once, I realized I needed a more careful approach. A simple includes() check wasn’t enough because it doesn’t track how many times a letter has already been matched. This problem is basically the scoring system used in Wordle, and like Wordle, the matching has to happen in two passes, first exact matches, then partial matches, while tracking leftover letters. Understanding that was the key mental unlock.

## What I Learned

- You can’t handle exact and partial matches at the same time.
Exact matches must be assigned first so partial matches don’t accidentally consume letters that should have been used for a “2.”
- You need a frequency map.
This lets you keep track of how many times each letter still appears in the secret word after removing exact matches.
- for…in over a string gives indexes, not characters.
- I was doing for (const letter in guess) and realized it was giving "0", "1", "2", not actual letters. for...of or a normal loop is safer.
- Matching must happen left to right for partials.
This ensures the result follows the problem spec and mirrors Wordle’s logic.
- Breaking the problem into two clean passes simplifies everything.
First mark “2”s and subtract from counts, then process “1”s using remaining counts. Overall, this was a great exercise in careful indexing, counting, and following rules step-by-step instead of trying to solve everything in one pass.
