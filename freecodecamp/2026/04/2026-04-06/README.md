# 2026-04-06
[2026-04-06 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-06)

## Instructions
What Day Is It?

Given a Unix timestamp in milliseconds, return the day of the week.

Valid return days are:
- `"Sunday"`
- `"Monday"`
- `"Tuesday"`
- `"Wednesday"`
- `"Thursday"`
- `"Friday"`
- `"Saturday"`

Be sure to ignore time zones.

## My Thoughts

This is a simple timestamp-to-day conversion problem.

The clean approach is:

- create a `Date` object from the Unix timestamp in milliseconds
- use `getUTCDay()` so the result is not affected by local timezone offsets
- map the returned index (`0` through `6`) to the correct weekday name

Using `getUTCDay()` is the important detail here, because the prompt explicitly says to ignore time zones.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Timestamp problems often hinge on choosing the correct date/time API variant.
- `getUTCDay()` is the right choice when you want a timezone-independent weekday.
- A fixed lookup array is the simplest way to convert numeric day indexes into names.
- Even small date tasks can produce wrong answers if local timezone behavior is used accidentally.
