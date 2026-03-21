# 2026-03-20
[2026-03-20 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-20)

## Instructions

Equinox Shadows

Today is the equinox, when the sun is directly above the equator and perfectly overhead at noon. Given a time, determine the shadow cast by a 4-foot vertical pole.

- The time will be a string in `"HH:MM"` 24-hour format (for example, `"15:00"` is 3pm).
- You will only be given a time in 30 minute increments.

Rules:

- The sun rises at 6am directly `"east"`, and sets at 6pm directly `"west"`.
- A shadow always points opposite the sun.
- The shadow's length (in feet) is the number of hours away from noon, cubed.
- There is no shadow before sunrise (before 6am), after sunset (6pm or later), or at noon.

Return:

- If a shadow exists, return `"(length)ft (direction)"`. For example, `"8ft west"`.
- Otherwise, return `"No shadow"`.

For example, given `"10:00"`, return `"8ft west"` because 10am is 2 hours from noon, so 23 = 8 feet, and the shadow points west because the sun is in the east at 10am.

## My Thoughts

This challenge is a small rule-based time conversion problem.

The solution breaks down into:

- parse `"HH:MM"` into numeric hour and minute
- convert that into a decimal hour value
- reject times with no shadow:
  - before `6:00`
  - at or after `18:00`
  - exactly `12:00`

If a shadow exists:

- compute `hours_away = abs(time - 12)`
- compute shadow length as `hours_away^3`
- choose direction:
  - before noon -> `"west"`
  - after noon -> `"east"`

Your implementation also formats the length cleanly, so whole-number results do not print with unnecessary decimals.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Converting time strings into decimal-hour values makes time-distance calculations much simpler.
- Rule-heavy problems are easier to manage when split into “invalid/no-output cases” first, then normal computation.
- The shadow direction comes directly from “opposite the sun,” so morning and afternoon cases naturally mirror each other.
- Small formatting cleanup at the end can make outputs much more user-friendly.
