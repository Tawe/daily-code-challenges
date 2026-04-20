# 2026-04-16
[2026-04-16 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-16)

## Instructions
String Math

Given a string with numbers and other characters, perform math on the numbers based on the count of non-digit characters between the numbers.

- If the count of characters separating two numbers is even, use addition.
- If it's odd, use subtraction.
- Consecutive digits form a single number.
- Operations are applied left to right.
- Ignore leading and trailing characters that aren't digits.

For example, given `"3ab10c8"`, return `5`. Add 3 and 10 to get 13 because there's an even number of characters between them. Then subtract 8 from 13 because there's an odd number of characters between the result and 8.

## My Thoughts

This problem gets much simpler if the string is separated into two pieces of information:

- the numbers themselves
- the character gaps between those numbers

The JavaScript solution uses `str.match(/\d+/g)` to collect each full number, which handles multi-digit values correctly. Then it uses `str.split(/\d+/)` to grab the separator strings between those numbers. After that, it walks left to right through the numbers and checks the length of the separator before each next number.

If that separator length is even, it adds the number. If it is odd, it subtracts it. Leading and trailing non-digit characters naturally fall away because only the separators between actual numbers are used.

Time complexity: `O(n)`  
Space complexity: `O(n)`

## What I Learned

- Regex is really useful when a string problem has clear token types like digit runs and separators.
- Splitting the parsing step from the evaluation step makes left-to-right rules much easier to implement.
- Counting only the separators between numbers is the key detail; leading and trailing junk characters should not affect the result.
