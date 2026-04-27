# 2026-04-26

## Instructions
Given a 2D array of characters `grid` of size `m x n`, you need to find if there exists any cycle consisting of the **same value** in `grid`.

A cycle is a path of **length 4 or more** in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the **same value** of the current cell.

Also, you cannot move to the cell that you visited in your last move. For example, the cycle `(1, 1) -> (1, 2) -> (1, 1)` is invalid because from `(1, 2)` we visited `(1, 1)` which was the last visited cell.

Return `true` if any cycle of the same value exists in `grid`, otherwise, return `false`.

**Example 1:**

**![](https://assets.leetcode.com/uploads/2020/07/15/1.png)**

**Input:** grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
**Output:** true
**Explanation:** There are two valid cycles shown in different colors in the image below:
![](https://assets.leetcode.com/uploads/2020/07/15/11.png)

**Example 2:**
**![](https://assets.leetcode.com/uploads/2020/07/15/22.png)**
**Input:** grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
**Output:** true
**Explanation:** There is only one valid cycle highlighted in the image below:
![](https://assets.leetcode.com/uploads/2020/07/15/2.png)

**Example 3:**
**![](https://assets.leetcode.com/uploads/2020/07/15/3.png)**
**Input:** grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
**Output:** false

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 500`
- `grid` consists only of lowercase English letters.

## My Thoughts

The key observation is that this is a graph cycle problem on a grid, but edges only exist between adjacent cells with the same character.  
So for each connected component (same letter), we need to detect whether a cycle exists.

The Rust solution uses iterative DFS with explicit state coloring:

- `0` = unvisited
- `1` = currently in DFS stack (visiting)
- `2` = fully processed

For each unvisited cell, we start a DFS and only move to neighbors with the same value.  
To avoid false cycles from immediately stepping back, each stack entry also tracks the parent cell and skips that one neighbor.  
If we ever reach a neighbor that is already in state `1` (currently visiting) and it is not the parent, we found a cycle.

Using an explicit stack instead of recursive DFS avoids recursion-depth issues on large grids.

### Complexity

- Time: `O(m * n)` (each cell and edge is processed a constant number of times)
- Space: `O(m * n)` (state grid + DFS stack in worst case)

## What I Learned

This challenge reinforced a very common cycle-detection pattern: DFS with parent tracking in an undirected graph.  
On grids, the "parent" check is essential, because every two-way edge can otherwise look like a cycle immediately.

It also reminded me that iterative DFS is often the safer default in grid problems with large constraints, especially in Rust where deep recursion can be risky.