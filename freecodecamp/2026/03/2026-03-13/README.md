# 2026-03-13
[2026-03-13 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-13)

## Instructions
Parking Fee Calculator

Given a parking start time and pickup time in `"HH:MM"` format, return the total parking fee as a dollar string (for example, `"$6"`).

Rules:

- Charge `$3` per hour, rounding partial hours up.
- Apply a minimum fee of `$5` whenever parking duration is greater than 0.
- If pickup time is earlier than park time, treat it as overnight (next day) and add an additional `$10` overnight fee.

## My Thoughts

This challenge combines time parsing, duration math, and rule-based pricing.

I used `datetime.strptime` to parse both times, then:

- if pickup is earlier than park time, add one day to pickup and mark it overnight
- compute hours from the time delta
- round billable hours up with `math.ceil`

Fee calculation is then straightforward:

- base fee is `max(billable_hours * 3, 5)` when duration is nonzero
- add `$10` if overnight
- return as a formatted dollar string

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Time-based pricing problems are easier when converted to exact durations first.
- `math.ceil` is the clean way to implement “partial hour rounds up”.
- Overnight handling can be modeled by shifting the end time into the next day.
- Applying business rules in clear stages (duration -> base fee -> overnight fee) keeps logic easy to verify.
