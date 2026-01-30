# 2026-01-30
[2026-01-30 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-30)

## Instructions
Valid Pawn Moves
Given the position of one of your pawns on a chessboard, return an array of all the valid squares it can move to in ascending order.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1
For this challenge:

You are the player on the bottom of the board.
Pawns can only move one square "up".
Unless the pawn is in the starting row (row 2), then it can move one or two squares up.
For example, given "D4", return ["D5"], the only square your pawn can move to. Given "B2", return ["B3", "B4"], because it's on the starting row and needs to be in ascending order.

## ## My Thoughts

This one was mostly about translating chess rules into simple coordinate math. Once I converted the position into a 0-based row index, the movement rules became straightforward: a pawn normally moves up by one row, and if it’s on the starting row (row 2), it can also move up by two.

The main thing I had to stay aware of was board boundaries. Even though the pawn “usually” can move up, it shouldn’t ever generate a square past row 8, so checking the row limits keeps the output safe.

I also returned the result in ascending order. In this specific problem the moves are naturally ordered already (one-step then two-step), but using `sorted()` is a clean way to guarantee the requirement no matter what.

## What I Learned

- Converting board positions (like `"D4"`) into numeric coordinates makes rule logic much easier.    
- 0-based indexing is helpful, but you have to be careful converting back to chess notation (rows are 1–8).
- Boundary checks are essential even in “simple” movement problems.
- The pawn’s special rule is just one extra condition: “if it’s on row 2, allow +2 as well.”
- Even if outputs seem naturally sorted, returning `sorted(moves)` guarantees compliance with the problem requirement.