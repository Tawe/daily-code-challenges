# 2026-02-16
[2026-02-16 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-16)

## Instructions
2026 Winter Games Day 11: Ice Hockey
Given an array of 6 ice hockey teams and their records after the round robin games, determine the match-ups for the semi-final round.

Each array item will have a team and their record in the format "TEAM: W-OTW-OTL-L". Where:
"W" is the number of wins in regulation, worth 3 points each
"OTW" is the number of overtime wins, worth 2 points each
"OTL" is the number of overtime losses, worth 1 point each
"L" is the number of losses, worth 0 points each
For example, "FIN: 2-2-1-0" would have 11 points after adding up their record.

Find the total number of points for each team and return "The semi-final games will be (1st) vs (4th) and (2nd) vs (3rd).". For example, "The semi-final games will be FIN vs SWE and CAN vs USA."

## My Thoughts

This challenge is basically parse -> score -> rank -> format.

I split each entry like `"FIN: 2-2-1-0"` into team name and record, then parse wins/overtime wins/overtime losses/losses as numbers. From there, scoring is a direct formula:

- regulation wins: `wins * 3`
- overtime wins: `otWins * 2`
- overtime losses: `otLosses * 1`
- losses: `0`

After computing points for each team, I sort descending by points and pick the top four seeds in order (`1st`, `2nd`, `3rd`, `4th`). Then I build the exact output sentence using the required pairings `1 vs 4` and `2 vs 3`.

## What I Learned

- Structuring transformations in stages (map, sort, then output) keeps this type of data problem clean.
- Parsing compact record strings is much easier when done in small splits (`": "` first, then `"-"`).
- Wrapping parsed data as objects (`{ teamName, points }`) makes ranking and formatting straightforward.
- For prompt-driven string outputs, matching the exact sentence template is just as important as correct logic.
