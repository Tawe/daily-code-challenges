# 2026-04-30

## Instructions
You are given an `m x n` grid where each cell contains one of the values 0, 1, or 2. You are also given an integer `k`.

You start from the top-left corner `(0, 0)` and want to reach the bottom-right corner `(m - 1, n - 1)` by moving only **right** or **down**.

Each cell contributes a specific score and incurs an associated cost, according to their cell values:

- 0: adds 0 to your score and costs 0.
- 1: adds 1 to your score and costs 1.
- 2: adds 2 to your score and costs 1. ​​​​​​​

Return the **maximum** score achievable without exceeding a total cost of `k`, or -1 if no valid path exists.

**Note:** If you reach the last cell but the total cost exceeds `k`, the path is invalid.

**Example 1:**
**Input:** grid = [[0, 1],[2, 0]], k = 1
**Output:** 2
**Explanation:**​​​​​​​
The optimal path is:

|Cell|grid[i][j]|Score|Total  <br>Score|Cost|Total  <br>Cost|
|---|---|---|---|---|---|
|(0, 0)|0|0|0|0|0|
|(1, 0)|2|2|2|1|1|
|(1, 1)|0|0|2|0|1|

Thus, the maximum possible score is 2.

**Example 2:**
**Input:** grid = [[0, 1],[1, 2]], k = 1
**Output:** -1
**Explanation:**
There is no path that reaches cell `(1, 1)`​​​​​​​ without exceeding cost k. Thus, the answer is -1.

**Constraints:**
- `1 <= m, n <= 200`
- `0 <= k <= 103​​​​​​​`
- `​​​​​​​grid[0][0] == 0`
- `0 <= grid[i][j] <= 2`

## My Thoughts

This is a dynamic programming problem where the path state depends on both position and total cost used so far. Since we can only move right or down, each cell only depends on the cell above it and the cell to the left, which makes a row-by-row DP work well.

The Rust solution stores, for each cell and each possible cost `c`, the maximum score reachable at that exact cost. When processing a cell, it looks at the best value from:

- the same column in the previous row
- the previous column in the current row

If either of those states is reachable with the remaining budget before paying for the current cell, the score gets updated by adding the current cell's value. Cells with value `1` or `2` cost `1`, while `0` costs nothing.

Using rolling rows keeps the memory smaller, since only the previous row and current row are needed at any time.

### Complexity

- Time: `O(m * n * k)`
- Space: `O(n * k)`

## What I Learned

This challenge reinforced a standard constrained-path pattern: when you want to optimize one quantity under a budget on another quantity, the budget usually needs to be part of the DP state.

It also showed how effective rolling arrays can be in grid DP. The transition only depends on up and left, so there is no reason to keep the full `m x n x k` table in memory.
