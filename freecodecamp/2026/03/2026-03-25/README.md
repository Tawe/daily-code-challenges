# 2026-03-25
[2026-03-25 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-25)

## Instructions
Cooldown Time

Given two timestamps, the first representing when a user finished an exam, and the second representing the current time, determine whether the user can take an exam again.

- Both timestamps will be given the format: `"YYYY-MM-DDTHH:MM:SS"`, for example `"2026-03-25T14:00:00"`. Note that the time is 24-hour clock.
- A user must wait at least 48 hours before retaking an exam.

## My Thoughts

This is a straightforward datetime comparison problem.

The clean approach is:

- parse both timestamp strings into `datetime` objects
- compute the retake eligibility time as `finish_time + 48 hours`
- compare the current time against that threshold

If `current_time` is greater than or equal to the 48-hour mark, return `True`; otherwise return `False`.

Using `datetime` and `timedelta` avoids manual date arithmetic and handles day boundaries cleanly.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- ISO-like timestamp strings are much easier to work with once parsed into `datetime` objects.
- `timedelta(hours=48)` is clearer and safer than trying to manipulate hours by hand.
- Eligibility-style problems often reduce to “compute threshold time, then compare.”
- Built-in date/time tools remove a lot of edge-case risk around crossing into the next day or month.
