# 2026-02-24
[2026-02-24 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-24)

## Instructions
Business Day Count
Given a start date and an end date, return the number of business days between the two.

- Given dates are in the format "YYYY-MM-DD".
- Weekdays are business days (Monday through Friday).
- Weekends are not business days (Saturday and Sunday).
- Include both the start and end dates when counting.

## My Thoughts

I parsed both dates into numeric year/month/day values and converted them to UTC timestamps so timezone offsets would not affect day math.

- Split `start` and `end` by `-` and map to numbers
- Convert both to UTC with `Date.UTC(...)`
- If dates are reversed, swap them so iteration always moves forward
- Compute inclusive day count:
  - `totalDays = ((endTime - startTime) / 86400000) + 1`
- Loop each day offset and compute weekday with:
  - `(startDate.getUTCDay() + i) % 7`
- Count only weekdays (`1..5`) and skip Sunday (`0`) / Saturday (`6`)

Using UTC and day offsets keeps the logic stable and avoids local-time edge cases.

Time complexity is `O(n)`, where `n` is the number of days in the range.  
Space complexity is `O(1)`.

## What I Learned

- For date-difference problems, UTC-based calculations are safer than local `Date` math.
- Normalizing input order early (swap when `start > end`) simplifies the rest of the algorithm.
- Inclusive range counting is easy to miss, so adding `+1` to total days is an important detail.
