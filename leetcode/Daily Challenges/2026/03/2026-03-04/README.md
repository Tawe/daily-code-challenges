# 2026-03-04

## Instructions
Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).
```
Example 1:
Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

Example 2:
Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
```
Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
mat[i][j] is either 0 or 1.

## My Thoughts

The condition for a special position is very strict:

- the cell itself must be `1`
- its entire row can contain no other `1`
- its entire column can contain no other `1`

The Go solution checks that condition directly.

For every cell `(i, j)`:

- skip it if `mat[i][j] == 0`
- if it is `1`, count how many `1`s appear in column `j`
- count how many `1`s appear in row `i`
- only add to the answer when both counts are exactly `1`

That makes the logic easy to follow because it mirrors the problem statement almost word for word.

It is not the most optimized version, since each `1` may trigger a full row scan and a full column scan, giving a time complexity of about `O(m * n * (m + n))`, but with `m, n <= 100`, that is still completely reasonable here.

## What I Learned

- Some matrix problems are simplest when you implement the definition directly before worrying about optimization.
- A cell is special only when it is the unique `1` in both its row and its column.
- Even when a brute-force solution repeats work, small constraints can make the straightforward approach the best first choice.
