# 2026-03-27
[2026-03-27 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-27)

## Instructions
Truncate the Text 2

Given a string, return a new string that is truncated so that the total width of the characters does not exceed 50 units.

Each character has a specific width:

|Letters|Width|
|---|---|
|`"ilI"`|1|
|`"fjrt"`|2|
|`"abcdeghkmnopqrstuvwxyzJL"`|3|
|`"ABCDEFGHKMNOPQRSTUVWXYZ"`|4|

The table above includes all upper and lower case letters. Additionally:

- Spaces (`" "`) have a width of 2
    
- Periods (`"."`) have a width of 1
    
- If the given string is 50 units or less, return the string as-is, otherwise
    
- Truncate the string and add three periods at the end (`"..."`) so it's total width, including the three periods, is as close as possible to 60 units without going over.