# 2026-01-27
[2026-01-27 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-27)

## Instructions
Odd or Even Day
Given a timestamp (number of milliseconds since the Unix epoch), return:

- "odd" if the day of the month for that timestamp is odd.
- "even" if the day of the month for that timestamp is even.

For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

## My Thoughts

This problem was straightforward on the surface, but it required paying attention to what the timestamp actually represents. The key realization was that the input isn’t a date string or a day number, it’s a Unix timestamp in milliseconds, which means it has to be converted properly before doing anything else.

Once I recognized that conversion step, the rest of the problem became simple. I didn’t need to worry about months, leap years, or time zones beyond making sure the date calculation was consistent. Extracting the day of the month and checking whether it’s odd or even is a clean, direct check.

Using the standard library helped a lot here. Instead of manually calculating days from the epoch, letting datetime handle that logic avoids edge cases and keeps the solution readable.

This felt like a good reminder that many problems are really about interpreting inputs correctly, not writing clever logic.

## What I Learned
	•	Unix timestamps are often in milliseconds, not seconds.
	•	Converting timestamps correctly is more important than the final condition.
	•	The datetime standard library handles tricky calendar logic safely.
	•	Extracting date.day gives the day of the month, not the day of the week.
	•	Simple conditionals are often all that’s needed once the data is in the right form.
	•	Readability and correctness matter more than over-optimizing small problems.