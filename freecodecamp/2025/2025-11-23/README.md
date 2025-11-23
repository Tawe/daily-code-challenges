# 2025-11-23
[2025-11-23 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-23)

## Instruction 
Character Count
Given a sentence string, return an array with a count of each character in alphabetical order.

Treat upper and lowercase letters as the same letter when counting.
Ignore numbers, spaces, punctuation, etc.
Return the count and letter in the format "letter count". For instance, "a 3".
All returned letters should be lowercase.
Do not return a count of letters that are not in the given string.

## My Thoughts

My first solution worked, but something about it felt heavier than necessary. I was filtering and formatting the string correctly, but then I realized I was repeatedly splitting the entire string once per unique character just to count occurrences. It technically solved the problem, but the approach didn’t feel efficient or elegant, especially when the task is fundamentally about counting things.

Once I stepped back, it became obvious that the problem doesn’t require any complex string operations at all. All I really needed was to scan the sentence once, track how often each letter appears, and then output those counts in alphabetical order. That shift in perspective turned the solution from a multi-pass process into a simple one-pass frequency count.

## What I Learned

- It’s important to re-read problem constraints carefully. I initially kept digits in my filtered string, but the instructions say to ignore numbers entirely.
- Relying on split inside a loop creates unnecessary repeated work, it scans the whole string once per character. A frequency map avoids that and scales better.
- Many string-counting problems reduce to:
→ normalize the input (lowercase)
→ filter valid characters
→ count in one pass
- Using an object as a frequency table is both efficient and easy to reason about.
- Sorting only the keys at the end ensures the final output is alphabetical without doing extra work during counting.
- This challenge reinforced a broader pattern:
If you’re counting things, try to count them in a single pass before doing any formatting or mapping.