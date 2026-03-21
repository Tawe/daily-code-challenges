# 2026-03-21

## Instructions
You are given an `m x n` integer matrix `grid`, and three integers `x`, `y`, and `k`.

The integers `x` and `y` represent the row and column indices of the **top-left** corner of a **square** submatrix and the integer `k` represents the size (side length) of the square submatrix.

Your task is to flip the submatrix by reversing the order of its rows vertically.

Return the updated matrix.

**Example 1:**
![](https://assets.leetcode.com/uploads/2025/07/20/gridexmdrawio.png)
**Input:** grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3
**Output:** [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]]
**Explanation:**
The diagram above shows the grid before and after the transformation.

**Example 2:**
![](https://assets.leetcode.com/uploads/2025/07/20/gridexm2drawio.png)​​​​
**Input:** grid = [[3,4,2,3],[2,3,4,2]], x = 0, y = 2, k = 2
**Output:** [[3,4,4,2],[2,3,2,3]]
**Explanation:**
The diagram above shows the grid before and after the transformation.

**Constraints:**
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 50`
- `1 <= grid[i][j] <= 100`
- `0 <= x < m`
- `0 <= y < n`
- `1 <= k <= min(m - x, n - y)`

## My Thoughts

The operation only affects the `k x k` square starting at `(x, y)`, and “reverse rows vertically” means:

- first row of the square swaps with last row
- second row swaps with second-last row
- continue inward until the middle

So the clean approach is:

- iterate `i` from `0` to `k/2 - 1`
- compute the matching row indices:
  - `top = x + i`
  - `bottom = x + k - 1 - i`
- swap the `k` elements in those two rows across columns `y .. y+k-1`

That updates the submatrix in place and leaves everything outside the square untouched.

Time complexity: `O(k^2)`  
Space complexity: `O(1)`

## What I Learned

- When reversing a bounded square region vertically, only row pairs need to be swapped.
- Restricting the column loop to the submatrix range avoids touching unrelated cells.
- In-place pair swapping is the simplest way to implement localized matrix transforms.
- For odd `k`, the middle row naturally stays unchanged, so iterating only to `k/2` handles that cleanly.
