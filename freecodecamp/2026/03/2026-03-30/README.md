# 2026-03-30
[2026-03-30 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-30)

## Instructions
Due Date

Given a date string, return the date 9 months in the future.

- The given and return strings have the format `"YYYY-MM-DD"`.
- If the month nine months into the future doesn't contain the original day number, return the last day of that month.

## My Thoughts

This is a date-shifting problem with one important edge case: month lengths are different.

The solution flow is:

- parse the input string into `year`, `month`, and `day`
- add `9` to the month
- roll over into the next year if the month goes past December
- find the last valid day of the target month
- clamp the original day to that maximum

That last step is what handles cases like moving from the 31st into a month that only has 30 days, or February.

Using `calendar.monthrange` makes the “last day of month” logic reliable without hardcoding month lengths.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Date arithmetic often needs explicit handling for month rollover and varying month lengths.
- Clamping to the last day of the target month is a clean way to preserve “same day when possible.”
- Standard-library calendar helpers are safer than manually coding month-day rules.
- Fixed-offset date problems still need careful treatment of edge cases like month overflow and short months.
