# 2026-02-21
[2026-02-21 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-21)

## Instructions
2026 Winter Games Day 16: Curling
Given a 5x5 matrix representing the "house" at the end of a curling round, determine which team scores and how many points they score.

The layout:

The center cell (index [2, 2]) is the "button".
The 8 cells directly surrounding the button represent ring 1.
And the 16 cells on the outer edge of the house represent ring 2.
In the given matrix:

"." represents an empty space.
"R" represents a space with a red stone.
"Y" represents a space with a yellow stone.
Scoring rules:

Only one team can score per round.
The team with the stone closest to the button scores.
The scoring team earns 1 point for each of their stones that is closer to the button than the opponent's closest stone.
The lower the ring number, the closer to the center the stone is.
If both teams' closest stone is the same distance from the center, no team scores.
Return:

A string in the format "team: number_of_points". e.g: "R: 2".
or "No points awarded" if neither team scored any points.
For example, given:

[
  [".", ".", "R", ".", "."],
  [".", "R", ".", ".", "."],
  ["Y", ".", ".", ".", "."],
  [".", "R", ".", ".", "."],
  [".", ".", ".", ".", "."]
]
Return "R: 2". The two red stones in ring 1 are tied for the closest and are the only two stones closer than yellows closest.

## My Thoughts

I treated this as a distance comparison problem:
- scan the 5x5 board once
- compute each stone's ring distance from the button at `[2, 2]`
- store red and yellow distances separately
- compare each team's closest stone

From there, scoring is straightforward:
- if closest distances tie, return `"No points awarded"`
- otherwise, only the winning team scores
- points = how many of their stones are closer than the opponent's closest stone

Using `Math.max(Math.abs(row - 2), Math.abs(col - 2))` made ring calculation simple and avoided manual ring checks.

## What I Learned

- Converting a grid game into numeric distances makes rule-heavy scoring much easier to implement.
- Once both teams' closest stones are known, point calculation becomes a single filter/count operation.
- Modeling the ring as Chebyshev distance (`max` of row/col offsets) is a clean way to represent this 5x5 curling house.
