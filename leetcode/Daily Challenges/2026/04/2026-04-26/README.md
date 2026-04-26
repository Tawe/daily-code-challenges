# 2026-04-26

## Instructions
You are given a 2D array of characters `grid` of size `m x n`, and you need to determine whether there exists any cycle made up of the same character.

A cycle is a path of length `4` or more in the grid that starts and ends at the same cell. From a given cell, you may move up, down, left, or right to an adjacent cell with the same value.

You are not allowed to immediately move back to the cell from your last step. For example, the path `(1,1) -> (1,2) -> (1,1)` is not a valid cycle.

Return `true` if the grid contains a cycle, otherwise return `false`.

**Example 1:**
**Input:** grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
**Output:** true

**Example 2:**
**Input:** grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
**Output:** true

**Example 3:**
**Input:** grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
**Output:** false

**Constraints:**
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 500`
- `grid` consists only of lowercase English letters.

## My Thoughts

This is a graph problem on a grid. Each cell is a node, and I only connect it to neighbors with the same character. A cycle exists if, during traversal, I reach another cell that is already part of the current DFS path and it is not just the parent I came from.

The Rust solution uses an iterative DFS instead of recursion. That avoids recursion-depth issues on larger grids and still gives the same cycle-detection behavior. Each cell has a small state:

- `0` = unvisited
- `1` = currently in the DFS stack
- `2` = fully processed

For each unvisited starting cell, the search only follows neighbors with the same character. If it sees a neighbor in state `1` that is not the immediate parent, then a cycle has been found and the function returns `true`.

### Complexity

- Time: `O(m * n)`
- Space: `O(m * n)`

## What I Learned

This challenge reinforced a common cycle-detection pattern for undirected graphs: visiting an already-active node means a cycle, but the parent edge has to be ignored.

It was also a good reminder that iterative DFS can be a practical substitute for recursion when the input can be large. The explicit stack makes the traversal state a little more manual, but it keeps the solution safe for deep searches.
