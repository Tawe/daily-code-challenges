# 2026-03-31
[2026-03-31 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-31)

## Instructions
Wake-Up Alarm

Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.

- Both times will be given in `"HH:MM"` 24-hour format.

Return:

- `"early"` if you woke up before your alarm time.
- `"on time"` if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
- `"late"` if you woke up more than 10 minutes after your alarm time.

Both times are on the same day.

## My Thoughts

This is a time-comparison problem with a small grace window.

The clean way to think about it is:

- parse both `"HH:MM"` strings into numeric hour/minute values
- compare the wake time against the alarm time
- allow a 10-minute buffer after the alarm for `"on time"`

Your solution handles this by first comparing hours, then checking minutes when the hours match.

Conceptually, the classification is:

- before alarm -> `"early"`
- from alarm time through 10 minutes after -> `"on time"`
- more than 10 minutes after -> `"late"`

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Small scheduling problems usually become simple once the comparison rules are stated as exact ranges.
- Parsing time strings into numeric parts is enough when both times are guaranteed to be on the same day.
- Grace-period logic is easiest to reason about when treated as an inclusive window.
- Even simple comparison problems benefit from clearly separating “before,” “within window,” and “after window” cases.
