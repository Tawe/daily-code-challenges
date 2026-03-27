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