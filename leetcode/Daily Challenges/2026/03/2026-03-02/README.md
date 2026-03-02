# 2026-03-02

## Instructions
Given an n x n binary grid, in one step you can choose two adjacent rows of the grid and swap them.

A grid is said to be valid if all the cells above the main diagonal are zeros.

Return the minimum number of steps needed to make the grid valid, or -1 if the grid cannot be valid.

The main diagonal of a grid is the diagonal that starts at cell (1, 1) and ends at cell (n, n).

```
Example 1:
Input: grid = [[0,0,1],[1,1,0],[1,0,0]]
Output: 3

Example 2:
Input: grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
Output: -1
Explanation: All rows are similar, swaps have no effect on the grid.

Example 3:
Input: grid = [[1,0,0],[1,1,0],[1,1,1]]
Output: 0
``` 

Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
grid[i][j] is either 0 or 1

## My Thoughts

The key observation is that row `i` must have enough trailing zeros to keep everything above the main diagonal equal to `0`.

For row `i`, every column to the right of the diagonal position has to be zero, so that row needs at least:

- `n - 1 - i` trailing zeros

That lets us simplify the problem:

- Convert each row into just its count of trailing zeros
- Process rows from top to bottom
- For each position `i`, find the first row at or below `i` that has enough trailing zeros

If no such row exists, the grid can never become valid, so the answer is `-1`.

If we do find one, the cheapest move is to bubble that row upward using adjacent swaps until it reaches position `i`.

That greedy step is correct because:

- We only care about getting some valid row into the current position
- Using the closest valid row minimizes the number of swaps spent right now
- Adjacent swaps preserve the relative order of the rows we skip over, so we can keep applying the same logic to the remaining positions

So the algorithm is:

- Count trailing zeros for every row
- For each target row position, search downward for the first row that satisfies the required zero count
- Swap it upward one step at a time and add those swaps to the answer

That is exactly what the Go solution does.

Time complexity is `O(n^2)` and space complexity is `O(n)`.

## What I Learned

- Sometimes a matrix problem becomes much simpler once each row is reduced to a single useful metric.
- “All cells above the diagonal are zero” translates directly into a trailing-zero requirement for each row position.
- When only adjacent swaps are allowed, bringing the nearest valid candidate upward is a natural greedy choice.
