# 2026-04-10
[2026-04-10 Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-04-10)

## Instructions
Rook Attack

Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

A standard chessboard is 8x8, with columns labeled `A` through `H` (left to right) and rows labeled `1` through `8` (bottom to top). It looks like this:

|**A8**|**B8**|**C8**|**D8**|**E8**|**F8**|**G8**|**H8**|
|---|---|---|---|---|---|---|---|
|**A7**|**B7**|**C7**|**D7**|**E7**|**F7**|**G7**|**H7**|
|**A6**|**B6**|**C6**|**D6**|**E6**|**F6**|**G6**|**H6**|
|**A5**|**B5**|**C5**|**D5**|**E5**|**F5**|**G5**|**H5**|
|**A4**|**B4**|**C4**|**D4**|**E4**|**F4**|**G4**|**H4**|
|**A3**|**B3**|**C3**|**D3**|**E3**|**F3**|**G3**|**H3**|
|**A2**|**B2**|**C2**|**D2**|**E2**|**F2**|**G2**|**H2**|
|**A1**|**B1**|**C1**|**D1**|**E1**|**F1**|**G1**|**H1**|

Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.

## My Thoughts

This is a very direct coordinate-comparison problem.

Each rook position has two parts:

- the letter for the column
- the number for the row

So after splitting each position:

- if the columns match, the rooks attack vertically
- if the rows match, the rooks attack horizontally
- otherwise they cannot attack each other

That means the whole solution is just checking whether either coordinate matches.

Time complexity: `O(1)`  
Space complexity: `O(1)`

## What I Learned

- Board-position problems often become simple once the symbolic notation is split into coordinates.
- For rooks specifically, only row equality or column equality matters.
- Not every chess challenge needs board simulation; sometimes a small coordinate rule is enough.
- When the input format is fixed, simple string splitting can be all the parsing you need.
