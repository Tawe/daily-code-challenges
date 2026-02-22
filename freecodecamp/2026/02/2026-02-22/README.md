# 2026-02-22
[2026-02-22 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-22)

## Instructions
2026 Winter Games Day 17: Closing Day
Given a 2D array of medal winners, return a medal count for each country as a CSV string.

In the given array, each sub-array represents a single event: [gold_winner, silver_winner, bronze_winner]

The returned CSV string should have the following format, with the first line being headers:

Country,Gold,Silver,Bronze,Total
country_name,gold_count,silver_count,bronze_count,total_medals
Separate new lines with the new line character ("\n").
Do not include spaces around commas or at the end of lines.
Sort the returned CSV by gold medal count, highest first. If two countries have the same gold medal count, sort the tied ones alphabetically.
For example, given:

[
  ["USA", "CAN", "NOR"],
  ["NOR", "USA", "CAN"],
  ["USA", "NOR", "SWE"]
]
Return:

"Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"
Which looks like this when printed:

Country,Gold,Silver,Bronze,Total
USA,2,1,0,3
NOR,1,1,1,3
CAN,0,1,1,2
SWE,0,0,1,1

## My Thoughts

I treated this as a medal table aggregation problem with sorting at the end.

- Loop through each event row: `[goldWinner, silverWinner, bronzeWinner]`
- Keep a per-country record of `gold`, `silver`, `bronze`, and `total`
- For each event, increment the three countries in their proper medal column and `total`
- After counting, sort countries by:
  - gold medals descending
  - alphabetical order for gold ties
- Build the final CSV string with the required header and newline-separated rows

Using a `Map` makes it easy to initialize countries on first sight and update counts in place.

## What I Learned

- For leaderboard-style problems, it helps to split the task into two phases: aggregate first, then sort/render.
- Tie-break rules should be encoded directly in a single comparator to avoid hidden ordering bugs.
- Constructing CSV via an array of row strings + `join("\n")` keeps formatting precise and simple.
