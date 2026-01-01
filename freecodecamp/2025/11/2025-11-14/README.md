# 2025-11-14
[2025-11-14 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-14)

## Instructions

Is It the Weekend?
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.
The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

## My Thoughts

This challenge looked simple on the surface, just take a date, figure out the weekday, and calculate how many days are left until Saturday. But the part that made it unexpectedly tricky was something I already knew about JavaScript but still managed to forget: dates will silently shift depending on your local timezone. I originally tried to force the date to midnight UTC by appending "T00:00:00Z", which I assumed would be enough. But even with that, I kept getting the wrong weekday for one of the test dates. My code thought "2025-12-06" was a Friday, not a Saturday. That’s when it clicked: the issue wasn’t the date string — it was the fact that I was using getDay(), which returns the local weekday. Once I realized that, the fix made perfect sense: just switch to getUTCDay(), which interprets the date in actual UTC and ignores my local timezone completely. After that, the rest of the logic fell neatly into place.

## What I Learned

- getDay() vs getUTCDay() matters a lot when you're supposed to ignore timezones. Even a perfectly valid UTC date string can still give the wrong weekday if you use the local version.
- Date parsing in JavaScript is subtle. Assuming that "YYYY-MM-DD" will always behave the same can lead to off-by-one-day bugs depending on where you live.
- String formatting bugs can fail tests just as hard as logic bugs. A backtick that looks like a period or apostrophe is enough to break a result.
- Sometimes the simplest-looking problems turn into debugging exercises about the platform (in this case, the JS date API) rather than the algorithm itself.
- Adding "T00:00:00Z" is good, but not enough by itself. You still must use the UTC methods to keep everything aligned.
