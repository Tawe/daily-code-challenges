# 2026-04-27

## Instructions
You are given an `m x n` `grid`. Each cell of `grid` represents a street. The street of `grid[i][j]` can be:

- `1` which means a street connecting the left cell and the right cell.
- `2` which means a street connecting the upper cell and the lower cell.
- `3` which means a street connecting the left cell and the lower cell.
- `4` which means a street connecting the right cell and the lower cell.
- `5` which means a street connecting the left cell and the upper cell.
- `6` which means a street connecting the right cell and the upper cell.

![](https://assets.leetcode.com/uploads/2020/03/05/main.png)

You will initially start at the street of the upper-left cell `(0, 0)`. A valid path in the grid is a path that starts from the upper left cell `(0, 0)` and ends at the bottom-right cell `(m - 1, n - 1)`. **The path should only follow the streets**.

**Notice** that you are **not allowed** to change any street.

Return `true` _if there is a valid path in the grid or_ `false` _otherwise_.

**Example 1:**
![](https://assets.leetcode.com/uploads/2020/03/05/e1.png)
**Input:** grid = [[2,4,3],[6,5,2]]
**Output:** true
**Explanation:** As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).

**Example 2:**
![](https://assets.leetcode.com/uploads/2020/03/05/e2.png)
**Input:** grid = [[1,2,1],[1,2,1]]
**Output:** false
**Explanation:** As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)

**Example 3:**
**Input:** grid = [[1,1,2]]
**Output:** false
**Explanation:** You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).

**Constraints:**
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `1 <= grid[i][j] <= 6`

## My Thoughts

This problem is also a graph traversal, but with a directional compatibility rule between cells.  
You can move from one street cell to a neighbor only if:

1. the current street has an opening toward that neighbor, and
2. the neighbor street has a matching opening back.

The Rust solution models each street type (`1..6`) as the two directions it supports, then performs DFS/BFS from `(0, 0)`:

- for each allowed outgoing direction from the current cell, compute neighbor coordinates
- skip out-of-bounds or already-visited cells
- verify the neighbor contains the reverse direction
- if valid, mark visited and continue traversal

If we reach `(m - 1, n - 1)`, the path exists; otherwise it does not.

The reverse-direction check is the important detail, since local movement from one side is not enough unless the adjacent tile actually connects.

### Complexity

- Time: `O(m * n)` (each cell is visited at most once, each with constant neighbor checks)
- Space: `O(m * n)` (visited grid + traversal stack/queue)

## What I Learned

This challenge was a good reminder that many grid problems are really constrainted graph traversal problems.  
Once each tile type is converted into directional edges, the rest becomes a standard reachability check.

It also reinforced how useful bidirectional edge validation is for "pipe/street" style puzzles: both endpoints must agree on the connection, not just the current cell.