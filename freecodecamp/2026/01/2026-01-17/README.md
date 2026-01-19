# 2026-01-17
[2026-01-17 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-17)

## Instructions
Knight Moves
Given the position of a knight on a chessboard, return the number of valid squares the knight can move to.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:

A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1
A knight moves in an "L" shape: two squares in one direction (horizontal or vertical), and one square in the perpendicular direction.

This means a knight can move to up to eight possible positions, but fewer when near the edges of the board. For example, if a knight was at A1, it could only move to B3 or C2.

## My Thoughts

This one was really about translating a “real world” representation (like "C2") into something I could do math with. Once I turned the column letter and row number into 0-based coordinates, the rest was just checking the knight’s 8 possible L-shaped offsets and counting which ones stay inside the board.

The nice part is that this problem is naturally constant-time. No matter where the knight is, you only ever consider the same 8 moves, and the only difference is how many of those moves stay in bounds near the edges.

## What I Learned
	•	Converting from a labeled grid (A–H / 1–8) into numeric coordinates makes movement problems much simpler.
	•	Knights always have the same 8 candidate moves; the only logic needed is bounds checking.
	•	When the set of possibilities is fixed (like “8 moves”), the solution is O(1) and doesn’t need fancy optimization.
	•	Using a small list of movement deltas is a reusable pattern for grid-based problems (knights, kings, adjacency checks, etc.).