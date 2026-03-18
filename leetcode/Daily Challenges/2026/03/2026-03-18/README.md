# 2026-03-18

## Instructions
You are given a **0-indexed** integer matrix `grid` and an integer `k`.

Return _the **number** of submatrices that contain the top-left element of the_ `grid`, _and have a sum less than or equal to_ `k`.

**Example 1:**
![](https://assets.leetcode.com/uploads/2024/01/01/example1.png)

**Input:** grid = [[7,6,3],[6,6,1]], k = 18
**Output:** 4
**Explanation:** There are only 4 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 18.

**Example 2:**
![](https://assets.leetcode.com/uploads/2024/01/01/example21.png)

**Input:** grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20
**Output:** 6
**Explanation:** There are only 6 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 20.

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= n, m <= 1000`
- `0 <= grid[i][j] <= 1000`
- `1 <= k <= 10^9`

## My Thoughts

Because the submatrix must include the top-left cell `(0,0)`, every valid candidate is exactly a prefix rectangle:

- from `(0,0)` to `(i,j)`

So we do not need to enumerate arbitrary submatrices.  
We only need the prefix sum at each `(i,j)` and check whether it is `<= k`.

I compute 2D prefix sums in-place:

- add top prefix (`i-1, j`) if it exists
- add left prefix (`i, j-1`) if it exists
- subtract overlap (`i-1, j-1`) if both exist

After computing each cell’s prefix sum, increment the answer when that value is `<= k`.

This gives a single pass over the matrix with no extra prefix array.

Time complexity: `O(m * n)`  
Space complexity: `O(1)` extra space (in-place update)

## What I Learned

- The “must contain top-left” condition is a strong simplifier: it reduces the search to prefix rectangles only.
- 2D prefix sums are ideal when many rectangle sums share overlapping regions.
- In-place prefix accumulation can save memory when mutating the input is acceptable.
- Checking constraints in-stream (as each prefix is built) avoids a second traversal.
