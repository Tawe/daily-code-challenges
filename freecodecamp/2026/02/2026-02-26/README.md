# 2026-02-26
[2026-02-26 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-26)

## Instructions
Letter and Number Count
Given a string, return a message with the count of how many letters and numbers it contains.

- Letters are A-Z and a-z.
- Numbers are 0-9.
- Ignore all other characters.

Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers". 

## My Thoughts

I split the problem into two simple counts:

- `str.match(/[a-zA-Z]/g)` to collect letters
- `str.match(/\d/g)` to collect digits

Since `match` returns `null` when nothing is found, I used `|| []` so both counts are always safe.

Then I handled grammar by switching between singular and plural labels:

- `letter` vs `letters`
- `number` vs `numbers`

Finally, I returned the exact sentence format required by the challenge.

Time complexity is `O(n)` because the string is scanned with regex matches.  
Space complexity is `O(n)` in the worst case because `match` creates arrays of results.

## What I Learned

- Regex + `match` is a clean way to classify characters by type.
- `|| []` is a reliable guard when `match` might return `null`.
- Small formatting rules (like singular/plural) are often the main edge case in string challenges.
