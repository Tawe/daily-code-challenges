# 2025-12-21
[2025-12-21 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-21)

## Instructions
Daylight Hours
December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.

Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:

Latitude	Daylight Hours
-90	24
-75	23
-60	21
-45	15
-30	13
-15	12
0	12
15	11
30	10
45	9
60	6
75	2
90	0
If the given latitude does not exactly match a table entry, use the value of the closest latitude.

## My Thoughts

My initial approach focused on mapping exact latitude values to daylight hours using an object. This worked for the examples provided in the table, but it didn’t fully account for the requirement that non-exact latitude values should use the closest entry.

Once I revisited the problem statement, it became clear that this wasn’t a direct lookup problem—it was a comparison problem. The input latitude could fall between table entries, so I needed a way to determine which known latitude was nearest.

Reframing the table as numeric data instead of key–value pairs made the solution clearer and more flexible. Instead of relying on exact matches, I could evaluate distance and choose the best approximation.

## What I Learned
- Exact lookups aren’t sufficient when a problem requires approximation.
- Using numbers as object keys can hide logical gaps when comparisons are needed.
- Small, fixed datasets are often best represented as ordered arrays.
- Math.abs() is a simple and effective tool for “closest value” problems.
- Correctness matters more than brevity—short code isn’t useful if it doesn’t satisfy all constraints.
- Rereading problem requirements often reveals subtle but critical details.