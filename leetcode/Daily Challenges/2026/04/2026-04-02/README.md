# 2026-04-02

## Instructions
You are given an `m x n` grid. A robot starts at the top-left corner of the grid `(0, 0)` and wants to reach the bottom-right corner `(m - 1, n - 1)`. The robot can move either right or down at any point in time.

The grid contains a value `coins[i][j]` in each cell:

- If `coins[i][j] >= 0`, the robot gains that many coins.
- If `coins[i][j] < 0`, the robot encounters a robber, and the robber steals the **absolute** value of `coins[i][j]` coins.

The robot has a special ability to **neutralize robbers** in at most **2 cells** on its path, preventing them from stealing coins in those cells.

**Note:** The robot's total coins can be negative.

Return the **maximum** profit the robot can gain on the route.

**Example 1:**
**Input:** coins = [[0,1,-1],[1,-2,3],[2,-3,4]]
**Output:** 8
**Explanation:**
An optimal path for maximum coins is:

1. Start at `(0, 0)` with `0` coins (total coins = `0`).
2. Move to `(0, 1)`, gaining `1` coin (total coins = `0 + 1 = 1`).
3. Move to `(1, 1)`, where there's a robber stealing `2` coins. The robot uses one neutralization here, avoiding the robbery (total coins = `1`).
4. Move to `(1, 2)`, gaining `3` coins (total coins = `1 + 3 = 4`).
5. Move to `(2, 2)`, gaining `4` coins (total coins = `4 + 4 = 8`).

**Example 2:**
**Input:** coins = [[10,10,10],[10,10,10]]
**Output:** 40
**Explanation:**
An optimal path for maximum coins is:

1. Start at `(0, 0)` with `10` coins (total coins = `10`).
2. Move to `(0, 1)`, gaining `10` coins (total coins = `10 + 10 = 20`).
3. Move to `(0, 2)`, gaining another `10` coins (total coins = `20 + 10 = 30`).
4. Move to `(1, 2)`, gaining the final `10` coins (total coins = `30 + 10 = 40`).

**Constraints:**

- `m == coins.length`
- `n == coins[i].length`
- `1 <= m, n <= 500`
- `-1000 <= coins[i][j] <= 1000`

## My Thoughts

Because robbers can make the total go down, this is a max-path DP with an extra state: how many neutralizations have been used so far.

I use:

- `dp[i][j][k]` = maximum profit reachable at cell `(i, j)` after using exactly `k` neutralizations
- `k` can be `0`, `1`, or `2`

For each cell:

- take the best previous value from top or left with the same `k`
- normally add `coins[i][j]`
- if the cell is negative and `k > 0`, also consider neutralizing it:
  - transition from top/left with `k - 1`
  - add `0` instead of the negative value

The start cell is initialized carefully:

- if it is positive, just take its value
- if it is negative, either accept the loss or spend one neutralization immediately

At the end, answer is the best among the three states at the bottom-right cell.

Time complexity: `O(m * n * 3)`, which is `O(m * n)`  
Space complexity: `O(m * n * 3)`, which is `O(m * n)`

## What I Learned

- Path problems with limited “power-ups” usually need DP state for how many power-ups have been used.
- Negative cells create a branching choice: take the loss or spend a neutralization.
- When the number of special actions is very small, adding a third DP dimension is usually the cleanest solution.
- Initializing the start cell correctly matters, especially when the first cell itself may be negative.
