# 2025-11-24
[2025-11-24 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-24)

## Instructions

Message Validator
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.

## My Thoughts

This problem looked straightforward at first: split the message into words, split the validator into letters, and compare the first character of each word. But once I tested the example with "dog.", I realized the challenge wasn’t just checking letters, it was handling punctuation and case sensitivity correctly. The message contains a trailing period, and without cleaning that up, the validation behaves inconsistently. The logic itself was solid; the tricky part was preparing the data properly before validating.

## What I Learned

I learned that input preprocessing is crucial. Even when a problem seems simple, real-world text often contains punctuation or formatting you need to normalize. Stripping non-alphabetic characters before validating ensures consistency and avoids subtle edge cases. I also reinforced the habit of lowering case early, checking lengths first to avoid unnecessary loops, and writing clear comparisons between corresponding positions. This challenge reminded me that correctness often depends as much on clean data as on correct logic.