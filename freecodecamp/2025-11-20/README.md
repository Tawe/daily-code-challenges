# 2025-11-20
[2025-11-20 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-20)

## Instruction 
Longest Word
Given a sentence string, return the longest word in the sentence.

Words are separated by a single space.
Only letters (a-z, case-insensitive) count toward the word's length.
If there are multiple words with the same length, return the first one that appears.
Return the word as it appears in the given string, with punctuation removed.

## My Thoughts
This problem looks straightforward, but I still found myself thinking about how to handle punctuation and edge cases. Once I realized the challenge explicitly says that only letters count, the solution became much clearer: strip out everything that isn’t a letter or a space, split on spaces, and then just track the longest word. I liked that the tie-breaking rule (“return the first longest word”) lined up nicely with a simple > comparison instead of needing extra conditions. Overall, it’s one of those problems that reinforces how much clarity you gain once you translate the rules into exact string operations.

## What I Learned
- A well-placed regex can cleanly remove punctuation without complicating the logic that follows.
- Using > instead of >= is a simple way to enforce a “first occurrence wins” rule.
- Even simple text problems benefit from walking through the requirements carefully, otherwise it’s easy to overcount punctuation or mishandle ties.
- The optimal solution doesn’t require any fancy techniques: a linear scan after cleaning the string is enough, and it maps directly to the problem’s constraints.