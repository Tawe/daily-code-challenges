# 2026-03-23

## Instructions
You are given a `m x n` matrix `grid`. Initially, you are located at the top-left corner `(0, 0)`, and in each step, you can only **move right or down** in the matrix.

Among all possible paths starting from the top-left corner `(0, 0)` and ending in the bottom-right corner `(m - 1, n - 1)`, find the path with the **maximum non-negative product**. The product of a path is the product of all integers in the grid cells visited along the path.

Return the _maximum non-negative product **modulo**_ `10^9 + 7`. _If the maximum product is **negative**, return_ `-1`.

Notice that the modulo is performed after getting the maximum product.

**Example 1:**
![](https://assets.leetcode.com/uploads/2021/12/23/product1.jpg)
**Input:** grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]
**Output:** -1
**Explanation:** It is not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.

**Example 2:**
![](https://assets.leetcode.com/uploads/2021/12/23/product2.jpg)
**Input:** grid = [[1,-2,1],[1,-2,1],[3,-4,1]]
**Output:** 8
**Explanation:** Maximum non-negative product is shown (1 * 1 * -2 * -4 * 1 = 8).

**Example 3:**
![](https://assets.leetcode.com/uploads/2021/12/23/product3.jpg)
**Input:** grid = [[1,3],[0,-4]]
**Output:** 0
**Explanation:** Maximum non-negative product is shown (1 * 0 * -4 = 0).

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 15`
- `-4 <= grid[i][j] <= 4`

## My Thoughts

Because the grid can contain negative numbers, the “best” product at a cell is not enough by itself.

A negative value can flip:

- a very small negative product into a large positive one
- a large positive product into a negative one

So for each cell I track both:

- `maxDP[i][j]`: largest product that can reach `(i, j)`
- `minDP[i][j]`: smallest product that can reach `(i, j)`

Transitions come from top and left.  
For each predecessor, multiply both its max and min by the current cell value, then take:

- the maximum of all candidates for `maxDP`
- the minimum of all candidates for `minDP`

At the end:

- if the max product at bottom-right is negative, return `-1`
- otherwise return it modulo `10^9 + 7`

Time complexity: `O(m * n)`  
Space complexity: `O(m * n)`

## What I Learned

- In path-product problems with negatives, you usually need both min and max DP states.
- A minimum negative value can be just as valuable as a maximum positive one because signs can flip later.
- Restricting movement to right/down makes the DP transitions simple and local.
- Modulo should only be applied at the end here, because applying it early would break product ordering for negatives.
