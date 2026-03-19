# 2026-03-19

## Instructions
Given a 2D character matrix `grid`, where `grid[i][j]` is either `'X'`, `'Y'`, or `'.'`, return the number of submatrices that contain:

- `grid[0][0]`
- an **equal** frequency of `'X'` and `'Y'`.
- **at least** one `'X'`.

**Example 1:**
**Input:** grid = [["X","Y","."],["Y",".","."]]
**Output:** 3
**Explanation:**
**![](https://assets.leetcode.com/uploads/2024/06/07/examplems.png)**

**Example 2:**
**Input:** grid = [["X","X"],["X","Y"]]
**Output:** 0
**Explanation:**
No submatrix has an equal frequency of `'X'` and `'Y'`.

**Example 3:**
**Input:** grid = [[".","."],[".","."]]
**Output:** 0
**Explanation:**
No submatrix has at least one `'X'`.

**Constraints:**

- `1 <= grid.length, grid[i].length <= 1000`
- `grid[i][j]` is either `'X'`, `'Y'`, or `'.'`.

## My Thoughts

Since every counted submatrix must include `grid[0][0]`, each candidate is a prefix rectangle `(0,0) -> (i,j)`.

So we only need to evaluate all prefixes, not arbitrary submatrices.

I tracked two running quantities per column:

- `colDiff[j]`: contribution of column `j` to `(countX - countY)` up to current row
- `colX[j]`: contribution of column `j` to `countX` up to current row

For each row:

- update `colDiff` and `colX` from that row’s characters
- sweep left to right with prefix sums:
  - `prefixDiff += colDiff[j]`
  - `prefixX += colX[j]`
- prefix rectangle `(0,0)->(i,j)` is valid when:
  - `prefixDiff == 0` (equal X and Y)
  - `prefixX > 0` (at least one X)

This gives one linear pass over all cells.

Time complexity: `O(m * n)`  
Space complexity: `O(n)`

## What I Learned

- The top-left inclusion constraint often converts 2D submatrix tasks into prefix-rectangle scans.
- Representing equality as a difference (`X = +1`, `Y = -1`) simplifies checks to `diff == 0`.
- Keeping an additional `X` counter is necessary because `diff == 0` alone allows the all-dot case.
- Column accumulators plus row-wise prefix sweeps are a clean pattern for `O(m*n)` matrix counting.
