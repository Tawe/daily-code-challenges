# 2026-03-15
[2026-03-15 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-03-15)

## Instructions
Captured Chess Pieces

Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

In chess, you start with 16 pieces:

|Piece|Abbreviation|Quantity|Value|
|---|---|---|---|
|Pawn|`"P"`|8|1|
|Rook|`"R"`|2|5|
|Knight|`"N"`|2|3|
|Bishop|`"B"`|2|3|
|Queen|`"Q"`|1|9|
|King|`"K"`|1|0|

- The given array will only contain the abbreviations above.
- Any of the 16 pieces not included in the given array have been captured.
- Return the total value of all captured pieces, unless...
- If the King has been captured, return `"Checkmate"`.

## My Thoughts

This is a counting-and-difference problem against fixed starting piece counts.

The solution flow is:

- first check if `"K"` is missing; if yes, return `"Checkmate"` immediately
- initialize counts for capturable piece groups from starting chess setup
- iterate current pieces and decrement remaining counts
- compute captured value from what remains missing

In your implementation, knights and bishops are grouped together (`4` total worth `3` each), which keeps the logic compact.

Time complexity: `O(n)`  
Space complexity: `O(1)`

## What I Learned

- When starting inventory is fixed, subtracting observed items is often simpler than building a full frequency map.
- Early-return rules (like king missing => checkmate) make edge-case handling cleaner.
- Grouping categories with equal point values can reduce branching without changing correctness.
- Constant-size lookup/count problems are good candidates for `O(1)` auxiliary space solutions.
