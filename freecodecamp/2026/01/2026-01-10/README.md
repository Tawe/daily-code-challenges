# 2026-01-10
[2026-01-10 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-10)

## Instructions
Tic-Tac-Toe
Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.
- Each element in the given matrix is either an "X" or "O".
A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

Return:

- "X wins" if player X has three in a row.
- "O wins" if player O has three in a row.
- "Draw" if no player has three in a row.

## My Thoughts

This problem is small, but it’s a good reminder that clarity matters more than cleverness. Because the board size is fixed (3×3), there’s no need to over-optimize or abstract too much. The goal is simply to be explicit and correct.

My initial instinct was to reuse logic by counting "X" and "O" occurrences, which works for rows, but it exposed a subtle issue when applied to columns. Iterating over board again felt like it should work, but it didn’t actually represent column access, a good reminder that code that “looks right” can still be logically wrong.

The diagonal checks were straightforward and reinforced that sometimes being repetitive is fine when it improves readability.

Overall, this was less about algorithms and more about careful indexing and correctness.


## What I Learned
	•	For fixed-size problems, explicit checks are often the cleanest solution.
	•	Iterating over a 2D structure doesn’t automatically mean you’re accessing all dimensions correctly.
	•	Column access in a matrix almost always requires indexing, not iteration.
	•	Returning the correct domain value ("Draw") is just as important as detecting wins.
	•	Overusing helpers like count() can hide logical mistakes if you’re not careful.
	•	Small problems are great places to practice precision and discipline, not just speed.