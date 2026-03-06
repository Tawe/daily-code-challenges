# 2026-03-06
[2026-03-06 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-06)

## Instructions
Given an array of strings representing your trail map, return a string of the moves needed to get to your goal.

The given strings will contain the values:

- "C": Your current location
- "G": Your goal
- "T": Traversable parts of the trail
- "-": Untraversable parts of the map

Return a string with the moves needed to follow the trail from your location to your goal where:

- "R" is a move right
- "D" is a move down
- "L" is a move left 
- "U" is a move up

There will always be one unbranched path of adjacent traversable cells from your current location to your goal.

Clarification: "adjacent" means sharing an edge (up, down, left, or right), not diagonals.

Each traversable cell on the path touches at most two other traversable cells (the path endpoints touch one).

For example, given:
```
[
  "-CT--",
  "--T--",
  "--TT-",
  "---T-",
  "---G-"
]
```
Return "RDDRDD".

## My Thoughts

This one is a path-following problem, but the constraints make it much simpler than a full maze search.

Because the trail is guaranteed to be a single unbranched path, I can:

- scan once to find `C` (the start)
- walk step by step until `G`
- at each step, choose the valid neighboring trail cell that is not the previous position

I only need to remember two coordinates while walking:

- `curr`: where I am now
- `prev`: where I came from

That prevents backtracking and lets me build the move string directly (`U`, `D`, `L`, `R`) in one pass.

## What I Learned

- Strong constraints ("single path", "no branching") can turn a graph-search problem into simple deterministic traversal.
- Tracking the previous cell is an easy way to avoid walking backward without extra visited structures.
- It helps to separate concerns: first locate start, then run the movement loop with a small helper to validate trail cells.
