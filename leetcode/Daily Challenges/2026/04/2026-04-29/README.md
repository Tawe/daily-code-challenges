# 2026-04-29

## Instructions
You are given a 2D matrix `grid` of size `n x n`. Initially, all cells of the grid are colored white. In one operation, you can select any cell of indices `(i, j)`, and color black all the cells of the `jth` column starting from the top row down to the `ith` row.

The grid score is the sum of all `grid[i][j]` such that cell `(i, j)` is white and it has a horizontally adjacent black cell.

Return the **maximum** score that can be achieved after some number of operations.

**Example 1:**
**Input:** grid = [[0,0,0,0,0],[0,0,3,0,0],[0,1,0,0,0],[5,0,0,3,0],[0,0,0,0,2]]
**Output:** 11
**Explanation:**
![](https://assets.leetcode.com/uploads/2024/05/11/one.png)
In the first operation, we color all cells in column 1 down to row 3, and in the second operation, we color all cells in column 4 down to the last row. The score of the resulting grid is `grid[3][0] + grid[1][2] + grid[3][3]` which is equal to 11.

**Example 2:**
**Input:** grid = [[10,9,0,0,15],[7,1,0,8,0],[5,20,0,11,0],[0,0,0,1,2],[8,12,1,10,3]]
**Output:** 94
**Explanation:**
![](https://assets.leetcode.com/uploads/2024/05/11/two-1.png)
We perform operations on 1, 2, and 3 down to rows 1, 4, and 0, respectively. The score of the resulting grid is `grid[0][0] + grid[1][0] + grid[2][1] + grid[4][1] + grid[1][3] + grid[2][3] + grid[3][3] + grid[4][3] + grid[0][4]` which is equal to 94.

**Constraints:**
- `1 <= n == grid.length <= 100`
- `n == grid[i].length`
- `0 <= grid[i][j] <= 109`

## My Thoughts

The key simplification here is to think of each column by the height of its black prefix. Once a column is painted down to some row, everything above that point is black and everything below it stays white. That means the whole grid state can be described by one height per column.

The Rust solution uses dynamic programming across columns. It precomputes prefix sums for each column so it can quickly ask for the sum of values between two row heights. Then the DP keeps track of neighboring painted heights and tries every possible height for the next column.

For each transition, the score gained comes from white cells in the previous column that now have a horizontally adjacent black cell because of the relationship between the current column height and its neighbors. Prefix sums make that gain calculation constant time once the heights are known.

So the overall pattern is:

- precompute column prefix sums
- sweep columns from left to right
- store DP states by adjacent column heights
- add only the newly contributed score at each step

### Complexity

- Time: `O(n^4)` in this implementation
- Space: `O(n^2)`

## What I Learned

This challenge reinforced how useful it is to compress a geometric coloring process into a much smaller state representation. Instead of reasoning about every black and white cell directly, the important information was just the painted height of each column.

It also showed how prefix sums and DP often work well together: prefix sums make each local score calculation cheap, and DP handles the global interaction between neighboring columns.
