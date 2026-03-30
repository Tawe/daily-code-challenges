# 2026-03-26
[2026-03-26 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-26)

## Instructions
Movie Night

Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.

The given day will be one of:

- `"Monday"`
- `"Tuesday"`
- `"Wednesday"`
- `"Thursday"`
- `"Friday"`
- `"Saturday"`
- `"Sunday"`

The showtime will be given in the format `"H:MMam"` or `"H:MMpm"`. For example `"10:00am"` or `"10:00pm"`.

Return the total cost in the format `"$D.CC"` using these rules:

- Weekend (Friday - Sunday): $12.00 per ticket.
- Weekday (Monday - Thursday): $10.00 per ticket.
- Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
- Tuesdays: all tickets are $5.00 each.

## My Thoughts

This challenge is a small pricing-rules problem with one important time check.

The clean flow is:

- handle Tuesday first, because it overrides the other pricing rules
- determine whether the day is weekend or weekday
- parse the showtime into 24-hour time
- if the show is before `5:00pm`, apply the matinee discount
- format the result as currency with two decimal places

Parsing the time into minutes since midnight makes the “before 5:00pm” check simple and reliable.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Rule-priority problems are easier when the strongest override case is handled first.
- Converting time strings into a comparable numeric form avoids messy string-based comparisons.
- `am/pm` parsing has edge cases like `12:00am` and `12:00pm`, so explicit handling matters.
- Formatting monetary values with two decimal places keeps the output predictable.
