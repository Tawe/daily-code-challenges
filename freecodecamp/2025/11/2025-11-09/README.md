# 2025-11-09
[2025-11-09 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-09)

## Instructions

Word Search
Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.
The given matrix will be filled with all lowercase letters (a-z).
The word to find will always be in the matrix exactly once.
The word to find will always be in a straight line in one of these directions:
left to right
right to left
top to bottom
bottom to top
For example, given the matrix:
[
["a", "c", "t"],
["t", "a", "t"],
["c", "t", "c"]
]
And the word "cat", return:
[[0, 1], [2, 1]]
Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).

## My Thoughts

This one looked complicated at first, but once I realized the word always appears in a straight line, it became much easier to understand. The idea is to loop through every letter in the grid and look for the first letter of the word. Whenever that letter matches, I check in all four directions right, left, up, and down—to see if the full word fits in that direction. It helped to think of the grid like a crossword puzzle: you start at one letter and move in a straight line until either the letters stop matching or you find the full word. Once you find it, you can return the starting and ending positions.

## What I Learned

- The word can go in any straight direction (up, down, left, right), but never diagonal or bent.
- “Directions” are just pairs of row/column movements that tell the program how to move through the grid.
- You don’t know where the word starts, so you have to check every letter in the grid as a possible starting point.
- Once I understood that the search was always in a straight line, the loops and directions made a lot more sense.
- It’s okay to check all directions—no single direction is “better,” you just stop once the correct one is found.
